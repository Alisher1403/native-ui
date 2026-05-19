import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { UISpacingType } from "./../ui.config";

export type FlexProps = {
  children?: React.ReactNode;
  gap?: UISpacingType;
  mt?: UISpacingType;
  align?: ViewStyle["alignItems"];
  justify?: ViewStyle["justifyContent"];
  style?: StyleProp<ViewStyle>;
  column?: boolean;
  wrap?: boolean;
  fullWidth?: boolean;
  gapX?: UISpacingType;
  gapY?: UISpacingType;
  flexShrink?: boolean;
};
