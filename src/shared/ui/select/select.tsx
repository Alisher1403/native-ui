import { memo } from "react";
import { View } from "react-native";
import { SelectProps } from "./select.types";
import { useModel } from "./select.model";
import { OptionSheet, SelectHeader } from "./components";

function Select(props: SelectProps) {
  const { onSelect, optionsMap, sheetRef, onClear, handleOpenSheet } = useModel(props);

  return (
    <View>
      <SelectHeader
        {...props}
        optionsMap={optionsMap}
        sheetRef={sheetRef}
        onClear={onClear}
        onOpenPress={handleOpenSheet}
      />
      <OptionSheet {...props} ref={sheetRef} onSelect={onSelect} />
    </View>
  );
}

export default memo(Select);
