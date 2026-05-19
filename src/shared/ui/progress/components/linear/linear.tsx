import { View } from "react-native";
import { ProgressLinearProps } from "./linear.types"; // can reuse your props
import { useUnistyles } from "react-native-unistyles";
import { styles } from "./linear.style";
import Animated, { clamp, useAnimatedStyle, useDerivedValue, withTiming } from "react-native-reanimated";

export function ProgressLinear(props: ProgressLinearProps) {
  const { theme } = useUnistyles();
  const animatedValue = useDerivedValue(() => props.value.value);
  styles.useVariants({
    size: props.size || "medium",
  });

  const progresStyle = useAnimatedStyle(() => {
    const progress = clamp(animatedValue.value, 0, props.max);
    return {
      width: `${clamp(progress, 0, props.max) * 100}%`,
    };
  });

  return (
    <View style={[styles.container, props.style]}>
      <Animated.View
        style={[
          styles.progress,
          progresStyle,
          { backgroundColor: theme.colors[props.progressColor || "main/primary"] },
        ]}
      />
    </View>
  );
}
