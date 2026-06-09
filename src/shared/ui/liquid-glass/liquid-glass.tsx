import { isLiquidGlassSupported, LiquidGlassView, type LiquidGlassViewProps } from "@callstack/liquid-glass";
import React from "react";
import { StyleProp, View, ViewStyle, useColorScheme } from "react-native";

export type AppLiquidGlassProps = Omit<LiquidGlassViewProps, "colorScheme" | "effect"> & {
  effect?: "clear" | "regular" | "none";
  fallback?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  unsupportedStyle?: StyleProp<ViewStyle>;
};

export function AppLiquidGlass({
  children,
  effect = "regular",
  interactive = true,
  style,
  unsupportedStyle,
  ...props
}: AppLiquidGlassProps) {
  const colorScheme = useColorScheme() === "dark" ? "dark" : "light";

  if (!isLiquidGlassSupported) {
    return (
      <View {...props} style={[style, unsupportedStyle]}>
        {children}
      </View>
    );
  }

  return (
    <LiquidGlassView
      {...props}
      style={style}
      effect={effect}
      colorScheme={colorScheme}
      interactive={interactive}
    >
      {children}
    </LiquidGlassView>
  );
}
