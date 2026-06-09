import { TextInput, View } from "react-native";
import { Division, Icon, INPUT_PREFIX, Typography } from "../../index";
import React from "react";
import { InputPhoneProps } from "./phone.types";
import { useModel } from "./phone.model";
import { styles } from "./phone.style";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

function InputPhone(props: InputPhoneProps) {
  const { label, disabled, error } = props;
  const { maskedValue, onChangeText } = useModel(props);
  styles.useVariants({
    disabled: !!disabled,
  });

  return (
    <View style={props.style}>
      {label ? (
        <Typography name="caption1/semibold" color="main/label" mb={8}>
          {label} {props.required ? <Typography name="caption1/semibold" color="main/error" children="*" /> : undefined}
        </Typography>
      ) : undefined}

      <View style={styles.inputContainer}>
        <View style={styles.prefix}>
          <Typography name="callout/medium" color="main/label">
            {INPUT_PREFIX.PHONE}
          </Typography>
        </View>
        <TextInput
          ref={props.ref}
          placeholder={props.placeholder ?? "(__) ___-__-__"}
          value={maskedValue}
          editable={!disabled}
          onChangeText={onChangeText}
          maxLength={14}
          numberOfLines={1}
          style={styles.input}
          placeholderTextColor={styles.placeholder.color}
          keyboardType="phone-pad"
        />
        <Division p={12}>
          <Icon name="phone-line" size={20} color="main/label" />
        </Division>
      </View>

      {error ? (
        <Animated.View entering={FadeIn} exiting={FadeOut}>
          <Typography name="caption1/medium" color="main/error" mt={2}>
            {error}
          </Typography>
        </Animated.View>
      ) : undefined}
    </View>
  );
}

export default React.memo(InputPhone);
