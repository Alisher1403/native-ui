import { memo } from "react";
import { View } from "react-native";
import { OtpInput as RNOtpInput } from "react-native-otp-entry";
import { useUnistyles } from "react-native-unistyles";
import { OtpInputProps } from "./otp-input.types";
import { styles } from "./otp-input.style";

function OtpInput(props: OtpInputProps) {
  const { theme } = useUnistyles();
  styles.useVariants({
    error: !!props.error,
    disabled: !!props.disabled,
  });

  return (
    <View style={props.style}>
      <RNOtpInput
        type="alphanumeric"
        numberOfDigits={props.numberOfDigits || 6}
        focusColor={props.error ? theme.colors["main/error"] : theme.colors["main/primary"]}
        focusStickBlinkingDuration={500}
        textInputProps={{
          editable: !props.disabled,
          autoComplete: "one-time-code",
          textContentType: "oneTimeCode",
        }}
        secureTextEntry={props.secureTextEntry}
        onFilled={props.onFilled}
        onTextChange={props.onChange}
        disabled={props.disabled}
        theme={{
          containerStyle: styles.container,
          pinCodeContainerStyle: styles.cell,
          pinCodeTextStyle: styles.cellText,
          focusedPinCodeContainerStyle: styles.cellFocused,
          filledPinCodeContainerStyle: styles.cellFilled,
        }}
      />
    </View>
  );
}

export default memo(OtpInput);
