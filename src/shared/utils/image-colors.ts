import { Image, ImageRequireSource, NativeModules } from "react-native";

export type ImageColors = {
  dominant: string;
  average: string;
  foreground: "#000000" | "#FFFFFF";
  isDark: boolean;
};

export type ImageColorsOptions = {
  fallback?: string;
  headers?: Record<string, string>;
  quality?: "lowest" | "low" | "high" | "highest";
  cache?: boolean;
  key?: string;
};

type NativeImageColorsModule = {
  getColors(uri: string, options: Omit<ImageColorsOptions, "cache" | "key">): Promise<ImageColors>;
};

const nativeImageColors = NativeModules.NativeImageColors as NativeImageColorsModule | undefined;
const imageColorsCache = new Map<string, ImageColors>();

function resolveImageUri(source: string | ImageRequireSource) {
  return typeof source === "string" ? source : Image.resolveAssetSource(source).uri;
}

export async function getImageColors(
  source: string | ImageRequireSource,
  options: ImageColorsOptions = {},
): Promise<ImageColors> {
  const uri = resolveImageUri(source);
  const cacheKey = options.key ?? uri;

  if (options.cache && imageColorsCache.has(cacheKey)) {
    return imageColorsCache.get(cacheKey)!;
  }

  if (!nativeImageColors) {
    throw new Error("NativeImageColors is unavailable. Rebuild the native application after adding the module.");
  }

  const result = await nativeImageColors.getColors(uri, {
    fallback: options.fallback ?? "#E5E7EB",
    headers: options.headers ?? {},
    quality: options.quality ?? "low",
  });

  if (options.cache) imageColorsCache.set(cacheKey, result);
  return result;
}

export function clearImageColorsCache(key?: string) {
  if (key) imageColorsCache.delete(key);
  else imageColorsCache.clear();
}
