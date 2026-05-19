import { Icons } from "./icon/icon.config";
import { DefaultAppTheme } from "@src/shared/styles/themes";

// * == Konfiguratsiya == //
export type UIThemeType = keyof (typeof DefaultAppTheme)["colors"];

export const UITheme = DefaultAppTheme;

export const UIColors = DefaultAppTheme["colors"];

export const UIFontFamily = DefaultAppTheme["fontFamily"];

export const UIIcons = Icons;

// ! == Tegilmasin == //
export type UISpacingType = number | `${number}%`;
export type UIRadiusType = number | `${number}%`;
export type UIColorsType = keyof typeof UIColors;
export type UIFontFamilyType = keyof typeof UIFontFamily;
export type UIIconsType = keyof typeof UIIcons;
export type BoxModelType = "m" | "mx" | "my" | "mt" | "mb" | "p" | "px" | "py" | "pt" | "pb";
export type BoxModelSpacing = Record<BoxModelType, UISpacingType>;
export type UiFontFamilyName = "Inter" | "Unbounded";
export type IconName = keyof typeof Icons;
