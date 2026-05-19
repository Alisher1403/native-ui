import React from "react";
import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import Animated, { useAnimatedProps, clamp } from "react-native-reanimated";
import { ProgressCircleProps } from "./circle.types";
import { useUnistyles } from "react-native-unistyles";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export function ProgressCircle(props: ProgressCircleProps) {
  const { theme } = useUnistyles();
  if (!props.size || !props.max) return null;

  const size = theme.size(props.size);
  const strokeWidth = theme.size(props.strokeWidth || 4);
  const radius = (size - strokeWidth) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * radius;

  const trackColor = theme.alpha(theme.colors[props.trackColor || "main/label"], 0.1);
  const progressColor = theme.colors[props.progressColor || "main/label"];

  const animatedProps = useAnimatedProps(() => {
    const clamped = clamp(props.value.value, 0, props.max);
    const progress = clamped / props.max;
    return {
      strokeDashoffset: circumference * (1 - progress),
    };
  });

  return (
    <View style={[props.style, { width: size, height: size }]}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Track */}
        <Circle cx={cx} cy={cy} r={radius} stroke={trackColor} fill="none" strokeWidth={strokeWidth} />
        {/* Animated progress */}
        <AnimatedCircle
          cx={cx}
          cy={cy}
          r={radius}
          stroke={progressColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          animatedProps={animatedProps}
          strokeLinecap="round"
          transform={`rotate(-90 ${cx} ${cy})`}
        />
      </Svg>
    </View>
  );
}
