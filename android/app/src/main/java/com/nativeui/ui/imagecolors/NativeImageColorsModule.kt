package com.nativeui.ui.imagecolors

import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.graphics.Color
import android.net.Uri
import android.util.Base64
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.module.annotations.ReactModule
import java.io.File
import java.net.HttpURLConnection
import java.net.URL
import java.util.Locale
import java.util.concurrent.Executors
import kotlin.math.max
import kotlin.math.min

@ReactModule(name = NativeImageColorsModule.NAME)
class NativeImageColorsModule(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {
  private data class ColorBucket(
    var count: Int = 0,
    var red: Long = 0,
    var green: Long = 0,
    var blue: Long = 0,
  )

  private val executor = Executors.newFixedThreadPool(2)

  override fun getName(): String = NAME

  @ReactMethod
  fun getColors(uri: String, options: ReadableMap, promise: Promise) {
    executor.execute {
      try {
        val fallback = normalizeHex(options.getStringOrNull("fallback")) ?: "#E5E7EB"
        val quality = options.getStringOrNull("quality") ?: "low"
        val bitmap = loadBitmap(uri, options.getMapOrNull("headers"))
          ?: throw IllegalArgumentException("Could not decode image.")
        promise.resolve(extractColors(bitmap, quality, fallback))
      } catch (error: Exception) {
        promise.reject("IMAGE_COLORS_FAILED", error.message, error)
      }
    }
  }

  override fun invalidate() {
    executor.shutdownNow()
    super.invalidate()
  }

  private fun loadBitmap(uri: String, headers: ReadableMap?): Bitmap? {
    return when {
      uri.startsWith("data:image") -> {
        val encoded = uri.substringAfter(',', "")
        val bytes = Base64.decode(encoded, Base64.DEFAULT)
        BitmapFactory.decodeByteArray(bytes, 0, bytes.size)
      }
      uri.startsWith("content://") ->
        reactApplicationContext.contentResolver.openInputStream(Uri.parse(uri)).use(BitmapFactory::decodeStream)
      uri.startsWith("file://") -> BitmapFactory.decodeFile(Uri.parse(uri).path)
      uri.startsWith("/") -> BitmapFactory.decodeFile(uri)
      uri.startsWith("http://") || uri.startsWith("https://") -> loadRemoteBitmap(uri, headers)
      uri.startsWith("asset:/") ->
        reactApplicationContext.assets.open(uri.removePrefix("asset:/").removePrefix("/")).use(BitmapFactory::decodeStream)
      else -> {
        val resourceId = reactApplicationContext.resources.getIdentifier(
          uri.substringBeforeLast('.'),
          "drawable",
          reactApplicationContext.packageName,
        )
        if (resourceId == 0) null else BitmapFactory.decodeResource(reactApplicationContext.resources, resourceId)
      }
    }
  }

  private fun loadRemoteBitmap(uri: String, headers: ReadableMap?): Bitmap? {
    val connection = URL(uri).openConnection() as HttpURLConnection
    connection.connectTimeout = 15_000
    connection.readTimeout = 15_000
    connection.useCaches = true
    headers?.entryIterator?.forEach { connection.setRequestProperty(it.key, it.value as? String) }

    return try {
      connection.inputStream.use(BitmapFactory::decodeStream)
    } finally {
      connection.disconnect()
    }
  }

  private fun extractColors(bitmap: Bitmap, quality: String, fallback: String) = Arguments.createMap().apply {
    val maxDimension = when (quality) {
      "lowest" -> 48
      "high" -> 192
      "highest" -> 320
      else -> 96
    }
    val scale = min(1f, maxDimension.toFloat() / max(bitmap.width, bitmap.height))
    val width = max(1, (bitmap.width * scale).toInt())
    val height = max(1, (bitmap.height * scale).toInt())
    val sampled = if (width == bitmap.width && height == bitmap.height) bitmap else Bitmap.createScaledBitmap(bitmap, width, height, true)
    val pixels = IntArray(width * height)
    sampled.getPixels(pixels, 0, width, 0, 0, width, height)

    val buckets = HashMap<Int, ColorBucket>()
    var totalCount = 0
    var totalRed = 0L
    var totalGreen = 0L
    var totalBlue = 0L

    for (pixel in pixels) {
      if (Color.alpha(pixel) < 128) continue
      val red = Color.red(pixel)
      val green = Color.green(pixel)
      val blue = Color.blue(pixel)
      val key = ((red shr 4) shl 8) or ((green shr 4) shl 4) or (blue shr 4)
      val bucket = buckets.getOrPut(key) { ColorBucket() }
      bucket.count += 1
      bucket.red += red.toLong()
      bucket.green += green.toLong()
      bucket.blue += blue.toLong()
      totalCount += 1
      totalRed += red
      totalGreen += green
      totalBlue += blue
    }

    if (sampled !== bitmap) sampled.recycle()

    if (totalCount == 0) {
      putString("dominant", fallback)
      putString("average", fallback)
      putString("foreground", "#000000")
      putBoolean("isDark", false)
      return@apply
    }

    val average = toHex(
      (totalRed / totalCount).toInt(),
      (totalGreen / totalCount).toInt(),
      (totalBlue / totalCount).toInt(),
    )
    val dominantBucket = buckets.values.maxByOrNull(::score)

    if (dominantBucket == null) {
      putString("dominant", fallback)
      putString("average", average)
      putString("foreground", "#000000")
      putBoolean("isDark", false)
      return@apply
    }

    val red = (dominantBucket.red / dominantBucket.count).toInt()
    val green = (dominantBucket.green / dominantBucket.count).toInt()
    val blue = (dominantBucket.blue / dominantBucket.count).toInt()
    val isDark = luminance(red, green, blue) < 0.48

    putString("dominant", toHex(red, green, blue))
    putString("average", average)
    putString("foreground", if (isDark) "#FFFFFF" else "#000000")
    putBoolean("isDark", isDark)
  }

  private fun score(bucket: ColorBucket): Double {
    val red = bucket.red.toDouble() / bucket.count / 255
    val green = bucket.green.toDouble() / bucket.count / 255
    val blue = bucket.blue.toDouble() / bucket.count / 255
    val maximum = max(red, max(green, blue))
    val minimum = min(red, min(green, blue))
    val saturation = if (maximum == 0.0) 0.0 else (maximum - minimum) / maximum
    val lightness = (maximum + minimum) / 2
    val edgePenalty = if (lightness < 0.04 || lightness > 0.96) 0.08 else 1.0
    return bucket.count * (0.35 + saturation * 1.65) * edgePenalty
  }

  private fun luminance(red: Int, green: Int, blue: Int): Double =
    (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255

  private fun toHex(red: Int, green: Int, blue: Int): String =
    String.format(Locale.US, "#%02X%02X%02X", red, green, blue)

  private fun normalizeHex(value: String?): String? =
    value?.uppercase(Locale.US)?.takeIf { it.matches(Regex("^#[0-9A-F]{6}$")) }

  private fun ReadableMap.getStringOrNull(key: String): String? =
    if (hasKey(key) && !isNull(key)) getString(key) else null

  private fun ReadableMap.getMapOrNull(key: String): ReadableMap? =
    if (hasKey(key) && !isNull(key)) getMap(key) else null

  companion object {
    const val NAME = "NativeImageColors"
  }
}
