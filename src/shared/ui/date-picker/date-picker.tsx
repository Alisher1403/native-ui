import { memo } from "react";
import { TouchableOpacity, View } from "react-native";
import RNDatePicker from "react-native-date-picker";
import { Icon, Typography } from "../index";
import { DatePickerProps } from "./date-picker.types";
import { styles } from "./date-picker.style";
import { useModel } from "./date-picker.model";
import { DATE_PICKER_LOCALES } from "./date-picker.config";

function DatePicker(props: DatePickerProps) {
  const { value, label, disabled, error, required } = props;
  const { locale, modalOpen, setModalOpen, handleConfirm, handleClear, handleCancel, formattedValue } = useModel(props);
  styles.useVariants({
    error: !!error,
    disabled: !!disabled,
  });

  return (
    <View>
      {label ? (
        <Typography name="caption1/medium" color="main/label-secondary" mb={8}>
          {label} {required && <Typography name="caption1/medium" color="main/error" children="*" />}
        </Typography>
      ) : null}
      <TouchableOpacity style={styles.header} onPress={() => setModalOpen(true)} disabled={disabled}>
        <Typography name="subheadline/medium" color={value ? "main/label" : "main/label-secondary"} flex>
          {formattedValue}
        </Typography>

        <TouchableOpacity style={styles.clearButton} disabled={!value || disabled} onPress={() => handleClear()}>
          <Icon name={value ? "close-line" : "calendar-3-line"} size={24} color="main/label-secondary" />
        </TouchableOpacity>
      </TouchableOpacity>

      <RNDatePicker
        modal
        open={modalOpen}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        mode="date"
        minimumDate={props.min}
        locale={DATE_PICKER_LOCALES[locale]}
        maximumDate={props.max}
        date={value ? new Date(String(value)) : new Date()}
      />

      {error ? <Typography name="caption1/medium" color="main/error" mt={2} children={error} /> : null}
    </View>
  );
}

export default memo(DatePicker);
