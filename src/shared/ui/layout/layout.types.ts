import React from "react";
import { UIIconsType, UISpacingType, UIThemeType } from "../ui.config";
import { DivisionProps } from "../division/division.types";

export type LayoutProps = DivisionProps & {
  children: React.ReactNode;
  footerInset?: boolean | number;
  keyboardAvoidingViewEnabled?: boolean;
};

export type LayoutConfigTypes = {
  headerBackButtonIcon: UIIconsType;
  padding: UISpacingType;
  backgroundColor: UIThemeType;
};
