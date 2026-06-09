import React, { memo, useEffect } from "react";
import { Pressable, View } from "react-native";
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { Typography } from "../index";
import { styles, SWITCH_TRANSLATE_X } from "./switch.style";
import type { SwitchProps } from "./switch.types";

function Switch(props: SwitchProps) {
  const progress = useSharedValue(props.value ? 1 : 0);
  const trackOff = styles.trackOff.backgroundColor as string;
  const trackOn = styles.trackOn.backgroundColor as string;

  useEffect(() => {
    progress.value = withTiming(props.value ? 1 : 0, { duration: 180 });
  }, [progress, props.value]);

  const trackStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(progress.value, [0, 1], [trackOff, trackOn]),
  }));

  const thumbStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: progress.value * SWITCH_TRANSLATE_X }],
  }));

  const handleToggle = () => {
    props.onChange(!props.value);
  };

  return (
    <View style={[styles.container, props.style]}>
      <Pressable
        style={styles.row}
        onPress={handleToggle}
        accessibilityRole="switch"
        accessibilityState={{ checked: props.value }}
      >
        {props.label ? (
          <Typography name="callout/medium" color="main/label" style={styles.label}>
            {props.label}
            {props.required ? <Typography name="callout/regular" color="main/error" children="*" /> : undefined}
          </Typography>
        ) : undefined}

        <Animated.View style={[styles.switch, trackStyle]}>
          <Animated.View style={[styles.thumb, thumbStyle]} />
        </Animated.View>
      </Pressable>

      {props.error ? (
        <Typography name="caption1/medium" color="main/error" mt={2}>
          {props.error}
        </Typography>
      ) : undefined}
    </View>
  );
}

export default memo(Switch);
