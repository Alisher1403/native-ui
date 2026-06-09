import React from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { Icon } from "../index";
import { styles } from "./button.style";
import { ButtonProps, ButtonType } from "./button.types";

function Button(props: ButtonProps) {
  styles.useVariants({
    type: props.type as Exclude<ButtonType, "default">,
    size: props.size || "medium",
    disabled: !!props.disabled,
    fullWidth: !!props.fullWidth,
  });

  const iconStyle = styles.icon;
  const prefix = props.loading ? (
    <ActivityIndicator color={iconStyle.color} />
  ) : props.icon ? (
    <Icon.Variant name={props.icon} {...iconStyle} />
  ) : null;

  function onPressButton() {
    if (!props.loading && props.onPress) {
      props.onPress();
    }
  }

  return (
    <Pressable
      style={[styles.container, props.style]}
      onPress={onPressButton}
      disabled={props.disabled || props.loading}
    >
      {({ pressed }) => (
        <View style={[styles.content, pressed && styles.buttonActive]}>
          <View style={styles.iconWrapper}>
            <View style={styles.iconSpacer} />
            {prefix}
          </View>
          {props.children ? <Text style={styles.buttonText}>{props.children}</Text> : undefined}
        </View>
      )}
    </Pressable>
  );
}

export default React.memo(Button);
