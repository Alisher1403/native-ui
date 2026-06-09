import { UiFontFamilyName, UISpacingType } from "./../ui.config";
import { StyleProp, TextProps, TextStyle } from "react-native";
import { UIThemeType } from "../ui.config";

export type TypographyProps = TextProps & {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
  name?: TypographyNames;
  color?: UIThemeType;
  mt?: UISpacingType;
  mb?: UISpacingType;
  align?: "left" | "center" | "right";
  flex?: boolean;
  font?: UiFontFamilyName;
};

export type TypographyTypes =
  | "caption2"
  | "caption1"
  | "footnote"
  | "subheadline1"
  | "subheadline"
  | "callout"
  | "body"
  | "title3"
  | "title2"
  | "title"
  | "title1"
  | "largetitle";

export type TypographyWeights = "regular" | "medium" | "semibold" | "bold";

export type TypographyNames = `${TypographyTypes}/${TypographyWeights}`;
