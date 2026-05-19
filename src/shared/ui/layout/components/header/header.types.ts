import React from "react";
import { ViewStyle } from "react-native";
import { FlexProps } from "../../../flex/flex.types";
import { TypographyProps } from "../../../typography/typography.types";

export type LayoutHeaderProps = FlexProps & {
  children?: React.ReactNode;
  style?: ViewStyle;
  onBackPress?(): void;
};

export type LayoutHeaderTitleProps = TypographyProps;

export type LayoutHeaderRightProps = FlexProps;

export type LayoutHeaderComponent = ((props: LayoutHeaderProps) => React.ReactNode) & {
  Height: () => React.ReactNode;
  Right: (props: LayoutHeaderRightProps) => React.ReactNode;
  Title: (props: LayoutHeaderTitleProps) => React.ReactNode;
};
