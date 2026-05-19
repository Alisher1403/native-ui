import React from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { Icon } from "../index";
import { styles } from "./button.style";
import { ButtonProps } from "./button.types";
import { useUnistylesProps } from "../ui.utils/unistyles";

function Button(props: ButtonProps) {
  const unistylesProps = useUnistylesProps(props);

  const RenderPrefix = () => {
    if (props.loading) {
      return <ActivityIndicator color={styles.icon(unistylesProps).color} />;
    } else if (props.icon) {
      return <Icon.Variant name={props.icon} {...styles.icon(unistylesProps)} />;
    }
  };

  function onPressButton() {
    if (!props.loading && props.onPress) {
      props.onPress();
    }
  }

  return (
    <Pressable
      style={[styles.container(unistylesProps), props.style]}
      onPress={onPressButton}
      disabled={props.disabled || props.loading}
    >
      {({ pressed }) => (
        <View style={[styles.content(unistylesProps), pressed && styles.buttonActive(unistylesProps)]}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ height: styles.icon(unistylesProps).fontSize }} />
            <RenderPrefix />
          </View>
          {props.children ? <Text style={styles.buttonText(unistylesProps)}>{props.children}</Text> : undefined}
        </View>
      )}
    </Pressable>
  );
}

export default React.memo(Button);
