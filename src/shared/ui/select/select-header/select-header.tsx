import { TouchableOpacity, View } from "react-native";
import { Flex, Icon, Typography } from "../../index";
import { SelectHeaderProps } from "./select-header.types";
import { styles } from "./select-header.style";

export function SelectHeader(props: SelectHeaderProps) {
  const { placeholder, optionsMap, value, label, required, error, disabled, onClear, onOpenPress } = props;
  styles.useVariants({
    error: !!error,
    disabled: disabled,
  });

  return (
    <View>
      {label ? (
        <Typography name="caption1/medium" color="main/label-secondary" mb={8}>
          {label} {required && <Typography name="caption1/medium" color="main/error" children="*" />}
        </Typography>
      ) : undefined}

      <TouchableOpacity style={styles.header} onPress={onOpenPress} disabled={disabled}>
        {value ? (
          <Flex align="center" justify="space-between">
            <Flex align="center" gap={8} flexShrink>
              {optionsMap.get(value)?.prefix}
              <Typography name="subheadline/medium" color="main/label" flex>
                {optionsMap.get(value)?.label || " "}
              </Typography>
            </Flex>
            <TouchableOpacity onPress={onClear}>
              <Icon name="close-line" size={24} color="main/label-secondary" />
            </TouchableOpacity>
          </Flex>
        ) : (
          <Flex align="center" justify="space-between">
            <Typography name="subheadline/medium" color="main/label-secondary" flex>
              {placeholder || " "}
            </Typography>
            <View>
              <Icon name="down-line" size={24} color="main/label-secondary" />
            </View>
          </Flex>
        )}
      </TouchableOpacity>

      {error ? (
        <Typography name="caption1/medium" color="main/error" mt={2}>
          {error}
        </Typography>
      ) : undefined}
    </View>
  );
}
