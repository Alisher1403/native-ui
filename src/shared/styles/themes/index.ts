import { StyleSheet } from "react-native-unistyles";
import { LightTheme } from "./light";
import { DarkTheme } from "./dark";

export const Themes = {
  light: LightTheme,
  dark: DarkTheme,
};

export type AppThemeList = typeof Themes;

export type AppTheme = (typeof Themes)["light"];

export const DefaultAppTheme = Themes["light"];

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemeList {}
}

StyleSheet.configure({
  themes: Themes,
  settings: {
    initialTheme: "light",
  },
});
