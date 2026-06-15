import { getImageColors, ImageColors, ImageColorsOptions } from "@src/shared/utils";
import { useEffect, useState } from "react";
import { ImageRequireSource } from "react-native";

export function useImageColors(source?: string | ImageRequireSource, options: ImageColorsOptions = {}) {
  const [colors, setColors] = useState<ImageColors>();
  const { cache, fallback, headers, key, quality } = options;

  useEffect(() => {
    if (!source) return;
    let active = true;

    getImageColors(source, { cache: true, fallback, headers, key: String(source), quality })
      .then(result => {
        if (active) setColors(result);
      })
      .catch(() => undefined);

    return () => {
      active = false;
    };
  }, [cache, fallback, headers, key, quality, source]);

  return colors;
}
