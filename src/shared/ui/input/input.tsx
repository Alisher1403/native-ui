import { memo } from "react";
import { TextInput, View } from "react-native";
import { useUnistyles } from "react-native-unistyles";
import { Typography } from "../index";
import { InputProps } from "./input.types";
import { styles } from "./input.style";
import useModel from "./input.model";

function Input(props: InputProps) {
  const { theme } = useUnistyles();
  const { label, disabled, error, ...inputProps } = props;
  const { maskedValue, onChangeText, currentConfig } = useModel({ ...props });
  styles.useVariants({
    error: !!error,
    disabled: !!disabled,
    prefixText: !!currentConfig.prefixText,
    suffixText: !!props.suffix,
  });

  return (
    <View style={props.style}>
      {label ? (
        <Typography name="caption1/medium" color="main/label-secondary" mb={8}>
          {label} {props.required ? <Typography name="caption1/medium" color="main/error" children="*" /> : undefined}
        </Typography>
      ) : undefined}

      <View style={styles.inputWrapper}>
        {currentConfig.prefixText ? (
          <View style={styles.prefixText}>
            <Typography name="subheadline/medium" color="main/label">
              {currentConfig.prefixText}
            </Typography>
          </View>
        ) : null}
        <TextInput
          ref={props.ref}
          placeholder={currentConfig.placeholder}
          {...inputProps}
          value={maskedValue}
          editable={!disabled}
          onChangeText={onChangeText}
          maxLength={currentConfig.maxLength}
          numberOfLines={1}
          style={styles.input}
          placeholderTextColor={theme.colors["main/label-secondary"]}
          keyboardType={currentConfig.keyboardType}
        />
        {props.suffix ? (
          <View style={styles.suffixText}>
            <Typography name="subheadline/medium" color="main/label-secondary">
              {props.suffix}
            </Typography>
          </View>
        ) : null}
      </View>

      {error ? (
        <Typography name="caption1/medium" color="main/error" mt={2}>
          {error}
        </Typography>
      ) : undefined}
    </View>
  );
}

export default memo(Input);
