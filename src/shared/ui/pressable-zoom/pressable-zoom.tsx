import React, { memo } from "react";
import { Pressable } from "react-native";
import Animated, { WithSpringConfig, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import type { PressableZoomProps } from "./pressable-zoom.types";

/** Scale while finger is down (press-in feedback). */
const PRESS_SCALE = 0.85;

const SPRING: WithSpringConfig = {
  duration: 400,
};

function PressableZoom({ onPress, onLongPress, style, children, ...pressableRest }: PressableZoomProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Pressable
      {...pressableRest}
      style={style}
      onPress={onPress}
      onPressIn={() => {
        scale.value = withSpring(PRESS_SCALE, SPRING);
      }}
      onPressOut={() => {
        scale.value = withSpring(1, SPRING);
      }}
      onLongPress={onLongPress}
    >
      <Animated.View style={animatedStyle}>{children}</Animated.View>
    </Pressable>
  );
}

export default memo(PressableZoom);
