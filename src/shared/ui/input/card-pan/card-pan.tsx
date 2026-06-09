import { TextInput, View } from "react-native";
import { Division, Icon, Typography } from "../../index";
import React from "react";
import { InputCardPanProps } from "./card-pan.types";
import { useModel } from "./card-pan.model";
import { styles } from "./card-pan.style";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

function InputCardPan(props: InputCardPanProps) {
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
          placeholder="0000 0000 0000 0000"
          value={maskedValue}
          editable={!disabled}
          onChangeText={onChangeText}
          maxLength={19}
          numberOfLines={1}
          style={styles.input}
          placeholderTextColor={styles.placeholder.color}
          keyboardType="numeric"
        />
        <Division p={12}>
          <Icon name="bank-card-line" size={20} color="main/label" />
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

export default React.memo(InputCardPan);
