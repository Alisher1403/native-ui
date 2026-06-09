import { TextInput, View } from "react-native";
import { Typography } from "../../index";
import React from "react";
import { InputUzsTiyinProps } from "./uzs-tiyin.types";
import { useModel } from "./uzs-tiyin.model";
import { styles } from "./uzs-tiyin.style";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

function InputUzsTiyin(props: InputUzsTiyinProps) {
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
          placeholder={props.placeholder}
          value={maskedValue}
          editable={!disabled}
          onChangeText={onChangeText}
          maxLength={21}
          numberOfLines={1}
          style={styles.input}
          placeholderTextColor={styles.placeholder.color}
          keyboardType="numeric"
        />
        {props.suffix ? (
          <View style={styles.suffix}>
            <Typography name="callout/medium" color="main/label">
              {props.suffix}
            </Typography>
          </View>
        ) : undefined}
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

export default React.memo(InputUzsTiyin);
