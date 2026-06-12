import React from "react";
import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import Animated, { useAnimatedProps, clamp } from "react-native-reanimated";
import { ProgressCircleProps } from "./circle.types";
import { styles } from "./circle.style";
import { useUnistylesProps } from "../../ui.utils/unistyles";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export function ProgressCircle(props: ProgressCircleProps) {
  if (!props.size || !props.max) return null;
  const unistylesProps = useUnistylesProps(props);
  const containerStyle = styles.container(unistylesProps) as { width: number; height: number };
  const trackStyle = styles.track(unistylesProps) as { borderWidth: number; borderColor: string };
  const progressStyle = styles.progress(unistylesProps) as { color: string };

  const size = containerStyle.width;
  const strokeWidth = trackStyle.borderWidth;
  const radius = (size - strokeWidth) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * radius;

  const trackColor = trackStyle.borderColor;
  const progressColor = progressStyle.color;

  const animatedProps = useAnimatedProps(() => {
    const clamped = clamp(props.value.value, 0, props.max);
    const progress = clamped / props.max;
    return {
      strokeDashoffset: circumference * (1 - progress),
    };
  });

  return (
    <View style={[props.style, containerStyle]}>
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
