import { Pressable, Text, TextInput, View } from "react-native";
import { useModel } from "./otp-input.model";
import { styles } from "./otp-input.style";
import type { OtpInputProps } from "./otp-input.types";

export function OtpInput(props: OtpInputProps) {
  const { value } = props;
  const { activeIndex, length, ...model } = useModel(props);
  styles.useVariants({
    disabled: !!props.disabled,
    error: !!props.error,
    isFocused: model.isFocused,
  });

  return (
    <View style={props.style}>
      <Pressable
        accessibilityLabel={`One-time password, ${length} digits`}
        accessibilityRole="button"
        disabled={props.disabled}
        onPress={model.focusInput}
        style={styles.boxRow}
      >
        {Array.from({ length }, (_, index) => {
          const isActive = index === activeIndex && model.isFocused && !props.disabled;
          return (
            <View key={index} style={[styles.box, isActive && styles.activeBox]}>
              <Text style={styles.digit}>{value[index] ?? ""}</Text>
            </View>
          );
        })}
      </Pressable>

      <TextInput
        ref={model.inputRef}
        autoComplete="one-time-code"
        autoFocus={props.autoFocus && !props.disabled}
        caretHidden
        editable={!props.disabled}
        keyboardType={props.keyboardType ?? "number-pad"}
        maxLength={length}
        onBlur={model.handleBlur}
        onChangeText={model.handleChange}
        onFocus={model.handleFocus}
        style={styles.hiddenInput}
        textContentType="oneTimeCode"
        value={value}
      />

      {props.error ? <Text style={styles.errorText}>{props.error}</Text> : null}
    </View>
  );
}

export default OtpInput;
