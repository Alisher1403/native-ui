import { TextInput, View } from "react-native";
import { Division, Icon, Typography } from "../../index";
import React from "react";
import { InputCardExpiryProps } from "./card-expiry.types";
import { useModel } from "./card-expiry.model";
import { styles } from "./card-expiry.style";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

function InputCardExpiry(props: InputCardExpiryProps) {
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
        <TextInput
          ref={props.ref}
          placeholder={props.placeholder ?? "MM/YY"}
          value={maskedValue}
          editable={!disabled}
          onChangeText={onChangeText}
          maxLength={5}
          numberOfLines={1}
          style={styles.input}
          placeholderTextColor={styles.placeholder.color}
          keyboardType="numeric"
        />
        <Division p={12}>
          <Icon name="calendar-3-line" size={20} color="main/label" />
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

export default React.memo(InputCardExpiry);
