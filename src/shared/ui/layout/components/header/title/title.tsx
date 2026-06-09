import React from "react";
import { useWindowDimensions } from "react-native";
import { Typography } from "../../../../index";
import { LayoutHeaderTitleProps } from "../header.types";
import { useNavigationTransition } from "../../../../ui.hooks/use-navigation-transition";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

export function LayoutHeaderTitle(props: LayoutHeaderTitleProps) {
  const { width } = useWindowDimensions();
  const { openingProgress, closingProgress } = useNavigationTransition();

  const titleAnimatedStyle = useAnimatedStyle(
    () => ({
      transform: [{ translateX: width * openingProgress.value * 0.3 }],
      opacity: closingProgress.value ** 3,
    }),
    [width],
  );

  return (
    <Animated.View style={[titleAnimatedStyle]}>
      <Typography name="body/semibold" color="main/label" {...props}>
        {props.children}
      </Typography>
    </Animated.View>
  );
}
