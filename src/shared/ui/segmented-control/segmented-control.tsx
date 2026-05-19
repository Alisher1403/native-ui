import React, { memo } from "react";
import { Pressable, View } from "react-native";
import { Typography } from "../index";
import { SegmentedControlProps } from "./segmented-control.types";
import { styles } from "./segmented-control.style";

function SegmentedControl(props: SegmentedControlProps) {
  const { options, value, onChange, style } = props;

  return (
    <View style={[styles.container, style]}>
      {options.map(option => {
        const isActive = option.value === value;
        return (
          <Pressable
            key={option.value}
            style={[styles.segment, isActive ? styles.segmentActive : styles.segmentInactive]}
            onPress={() => onChange(option.value)}
          >
            <Typography name="subheadline1/medium" color="main/label">
              {option.label}
            </Typography>
          </Pressable>
        );
      })}
    </View>
  );
}

export default memo(SegmentedControl);
