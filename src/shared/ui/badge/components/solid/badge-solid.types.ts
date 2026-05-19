import React from "react";
import { ViewStyle } from "react-native";
import { UIIconsType, UIColorsType } from "../../../ui.config";
import { DivisionProps } from "../../../division/division.types";

export type BadgeSolidProps = DivisionProps & {
  children?: React.ReactNode;
  style?: ViewStyle;
  color?: UIColorsType;
  icon?: UIIconsType;
  numberOfLines?: number;
  alignSelf?: "flex-start" | "flex-end";
};
