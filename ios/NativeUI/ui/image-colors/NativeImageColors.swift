import Foundation
import React
import UIKit

@objc(NativeImageColors)
final class NativeImageColors: NSObject {
  private struct ColorBucket {
    var count = 0
    var red = 0
    var green = 0
    var blue = 0
  }

  private let processingQueue = DispatchQueue(label: "com.nativeui.image-colors", qos: .userInitiated)

  @objc static func requiresMainQueueSetup() -> Bool {
    false
  }

  @objc(getColors:options:resolver:rejecter:)
  func getColors(
    _ uri: String,
    options: [String: Any],
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) {
    let fallback = normalizedHex(options["fallback"] as? String) ?? "#E5E7EB"
    let quality = options["quality"] as? String ?? "low"
    let headers = options["headers"] as? [String: String] ?? [:]

    loadImage(uri: uri, headers: headers) { [weak self] result in
      guard let self else { return }

      switch result {
      case .failure(let error):
        reject("IMAGE_COLORS_LOAD_FAILED", error.localizedDescription, error)
      case .success(let image):
        self.processingQueue.async {
          guard let colors = self.extractColors(from: image, quality: quality, fallback: fallback) else {
            reject("IMAGE_COLORS_EXTRACTION_FAILED", "Could not read image pixels.", nil)
            return
          }
          resolve(colors)
        }
      }
    }
  }

  private func loadImage(
    uri: String,
    headers: [String: String],
    completion: @escaping (Result<UIImage, Error>) -> Void
  ) {
    if uri.hasPrefix("data:image"), let comma = uri.firstIndex(of: ",") {
      let encoded = String(uri[uri.index(after: comma)...])
      let data = Data(base64Encoded: encoded, options: .ignoreUnknownCharacters)
      completeImage(data: data, completion: completion)
      return
    }

    if uri.hasPrefix("/") {
      completeImage(data: try? Data(contentsOf: URL(fileURLWithPath: uri)), completion: completion)
      return
    }

    guard let url = URL(string: uri) else {
      completion(.failure(makeError("Invalid image URI.")))
      return
    }

    if url.isFileURL {
      completeImage(data: try? Data(contentsOf: url), completion: completion)
      return
    }

    guard let scheme = url.scheme?.lowercased(), scheme == "http" || scheme == "https" else {
      completion(.failure(makeError("Unsupported image URI scheme.")))
      return
    }

    var request = URLRequest(url: url, cachePolicy: .returnCacheDataElseLoad, timeoutInterval: 15)
    headers.forEach { request.setValue($0.value, forHTTPHeaderField: $0.key) }

    URLSession.shared.dataTask(with: request) { [weak self] data, _, error in
      if let error {
        completion(.failure(error))
        return
      }
      self?.completeImage(data: data, completion: completion)
    }.resume()
  }

  private func completeImage(data: Data?, completion: (Result<UIImage, Error>) -> Void) {
    guard let data, let image = UIImage(data: data) else {
      completion(.failure(makeError("Could not decode image.")))
      return
    }
    completion(.success(image))
  }

  private func extractColors(from image: UIImage, quality: String, fallback: String) -> [String: Any]? {
    guard let source = image.cgImage else { return nil }

    let maxDimension: CGFloat
    switch quality {
    case "lowest": maxDimension = 48
    case "high": maxDimension = 192
    case "highest": maxDimension = 320
    default: maxDimension = 96
    }

    let scale = min(1, maxDimension / CGFloat(max(source.width, source.height)))
    let width = max(1, Int(CGFloat(source.width) * scale))
    let height = max(1, Int(CGFloat(source.height) * scale))
    let bytesPerRow = width * 4
    var pixels = [UInt8](repeating: 0, count: height * bytesPerRow)

    guard let context = CGContext(
      data: &pixels,
      width: width,
      height: height,
      bitsPerComponent: 8,
      bytesPerRow: bytesPerRow,
      space: CGColorSpaceCreateDeviceRGB(),
      bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue
    ) else { return nil }

    context.interpolationQuality = .medium
    context.draw(source, in: CGRect(x: 0, y: 0, width: width, height: height))

    var buckets: [Int: ColorBucket] = [:]
    var totalCount = 0
    var totalRed = 0
    var totalGreen = 0
    var totalBlue = 0

    for index in stride(from: 0, to: pixels.count, by: 4) where pixels[index + 3] >= 128 {
      let red = Int(pixels[index])
      let green = Int(pixels[index + 1])
      let blue = Int(pixels[index + 2])
      let key = ((red >> 4) << 8) | ((green >> 4) << 4) | (blue >> 4)
      var bucket = buckets[key] ?? ColorBucket()
      bucket.count += 1
      bucket.red += red
      bucket.green += green
      bucket.blue += blue
      buckets[key] = bucket
      totalCount += 1
      totalRed += red
      totalGreen += green
      totalBlue += blue
    }

    guard totalCount > 0 else {
      return ["dominant": fallback, "average": fallback, "foreground": "#000000", "isDark": false]
    }

    let average = hex(red: totalRed / totalCount, green: totalGreen / totalCount, blue: totalBlue / totalCount)
    let dominantBucket = buckets.values.max { score($0) < score($1) }
    guard let dominantBucket else {
      return ["dominant": fallback, "average": average, "foreground": "#000000", "isDark": false]
    }

    let red = dominantBucket.red / dominantBucket.count
    let green = dominantBucket.green / dominantBucket.count
    let blue = dominantBucket.blue / dominantBucket.count
    let isDark = luminance(red: red, green: green, blue: blue) < 0.48

    return [
      "dominant": hex(red: red, green: green, blue: blue),
      "average": average,
      "foreground": isDark ? "#FFFFFF" : "#000000",
      "isDark": isDark,
    ]
  }

  private func score(_ bucket: ColorBucket) -> Double {
    let red = Double(bucket.red / bucket.count) / 255
    let green = Double(bucket.green / bucket.count) / 255
    let blue = Double(bucket.blue / bucket.count) / 255
    let maximum = max(red, green, blue)
    let minimum = min(red, green, blue)
    let saturation = maximum == 0 ? 0 : (maximum - minimum) / maximum
    let lightness = (maximum + minimum) / 2
    let edgePenalty = lightness < 0.04 || lightness > 0.96 ? 0.08 : 1
    return Double(bucket.count) * (0.35 + saturation * 1.65) * edgePenalty
  }

  private func luminance(red: Int, green: Int, blue: Int) -> Double {
    (0.2126 * Double(red) + 0.7152 * Double(green) + 0.0722 * Double(blue)) / 255
  }

  private func hex(red: Int, green: Int, blue: Int) -> String {
    String(format: "#%02X%02X%02X", red, green, blue)
  }

  private func normalizedHex(_ value: String?) -> String? {
    guard let value else { return nil }
    let hex = value.uppercased()
    guard hex.range(of: "^#[0-9A-F]{6}$", options: .regularExpression) != nil else { return nil }
    return hex
  }

  private func makeError(_ message: String) -> NSError {
    NSError(domain: "NativeImageColors", code: 1, userInfo: [NSLocalizedDescriptionKey: message])
  }
}
