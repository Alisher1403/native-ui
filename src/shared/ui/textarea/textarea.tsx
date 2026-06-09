import React from "react";
import { TextInput, View } from "react-native";
import { Typography } from "../index";
import { TextAreaProps } from "./textarea.types";
import { styles } from "./textarea.style";

export function TextArea(props: TextAreaProps) {
  styles.useVariants({
    error: !!props.error,
  });

  return (
    <View style={[styles.container, props.style]}>
      {props.label ? (
        <Typography name="caption1/medium" color="main/label-secondary" mb={8}>
          {props.label}{" "}
          {props.required ? <Typography name="caption1/medium" color="main/error" children="*" /> : undefined}
        </Typography>
      ) : undefined}

      <TextInput
        value={props.value}
        onChangeText={props.onChange}
        style={styles.input}
        placeholder={props.placeholder}
        placeholderTextColor={styles.placeholder.color}
        maxLength={props.maxLength}
        multiline
        textAlignVertical="top"
      />

      {props.error ? (
        <Typography name="caption1/medium" color="main/error" mt={2}>
          {props.error}
        </Typography>
      ) : undefined}
    </View>
  );
}

export default React.memo(TextArea);
