import React, { memo } from "react";
import { Pressable } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import type { PressableZoomProps } from "./pressable-zoom.types";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

function PressableZoom(props: PressableZoomProps) {
  const { onPress, onLongPress, style, children, scale: pressScale = 1, duration = 200, ...pressableProps } = props;
  const zoomScale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: zoomScale.value }],
  }));

  function handlePressIn() {
    zoomScale.value = withSpring(pressScale, { duration });
  }

  function handlePressOut() {
    zoomScale.value = withSpring(1, { duration });
  }

  return (
    <AnimatedPressable
      {...pressableProps}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onLongPress={onLongPress}
      style={[style, animatedStyle]}
    >
      {children}
    </AnimatedPressable>
  );
}

export default memo(PressableZoom);
