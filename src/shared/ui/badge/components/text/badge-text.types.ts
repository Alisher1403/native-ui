import React from "react";
import { ViewStyle } from "react-native";
import { UIIconsType, UIColorsType, UIFontSizeType } from "../../../ui.config";
import { DivisionProps } from "../../../division/division.types";

export type BadgeTextSize = "large" | "medium" | "small";

export type BadgeTextProps = DivisionProps & {
  children?: React.ReactNode;
  style?: ViewStyle;
  color?: UIColorsType;
  icon?: UIIconsType;
  size?: BadgeTextSize;
  numberOfLines?: number;
};
