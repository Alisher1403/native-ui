import { UIFontFamilyType, UiFontFamilyName } from "../ui.config";
import type { TypographyTypes, TypographyWeights } from "./typography.types";

const DEFAULT_FONT: UiFontFamilyName = "QuickSand";
const DEFAULT_WEIGHT: TypographyWeights = "regular";
const FONT_SIZES: Record<TypographyTypes, number> = {
  caption2: 11,
  caption1: 12,
  footnote: 13,
  subheadline1: 14,
  subheadline: 15,
  callout: 16,
  body: 17,
  title3: 20,
  title2: 22,
  title: 24,
  title1: 28,
  largetitle: 34,
};

const FONT_WEIGHT_MAP: Record<UiFontFamilyName, Record<TypographyWeights, UIFontFamilyType>> = {
  Unbounded: {
    regular: "Unbounded_400",
    medium: "Unbounded_500",
    semibold: "Unbounded_600",
    bold: "Unbounded_700",
  },
  QuickSand: {
    regular: "Quicksand_400",
    medium: "Quicksand_500",
    semibold: "Quicksand_600",
    bold: "Quicksand_700",
  },
};

export function getFontFamilyKey(font?: UiFontFamilyName, weight?: TypographyWeights) {
  const f = font || DEFAULT_FONT;
  const w = weight || DEFAULT_WEIGHT;
  return FONT_WEIGHT_MAP[f][w];
}

export function getFontSize(name?: TypographyTypes) {
  if (!name) return undefined;
  return FONT_SIZES[name];
}
