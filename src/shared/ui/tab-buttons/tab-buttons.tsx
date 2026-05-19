import { ScrollView, TouchableOpacity } from "react-native";
import { Division, Typography } from "../index";
import { styles } from "./tab-buttons.style";
import { TabButtonsProps } from "./tab-buttons.types";

export default function TabButtons(props: TabButtonsProps) {
  const { options, value, onChange } = props;

  return (
    <ScrollView horizontal contentContainerStyle={{ flexGrow: 1 }} showsHorizontalScrollIndicator={false}>
      <Division style={styles.optionsContainer} {...props}>
        {options.map((option, index) => {
          const isActive = option.value === value;
          return (
            <TouchableOpacity
              key={index}
              style={[styles.option, isActive && styles.optionActive]}
              onPress={() => onChange(option.value)}
            >
              <Typography color={isActive ? "system/white" : "main/label"}>{option.label}</Typography>
            </TouchableOpacity>
          );
        })}
      </Division>
    </ScrollView>
  );
}
