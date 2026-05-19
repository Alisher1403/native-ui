import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { BoxModelSpacing, UIRadiusType, UIThemeType } from "../ui.config";

export type DivisionProps = Partial<BoxModelSpacing> & {
  children?: React.ReactNode;
  rounded?: UIRadiusType;
  style?: StyleProp<ViewStyle>;
  bg?: UIThemeType;
  flex?: boolean;
  hidden?: boolean;
  bgAlpha?: number;
  flexShrink?: boolean;
};
