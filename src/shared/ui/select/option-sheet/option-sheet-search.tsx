import { memo } from "react";
import { View } from "react-native";
import { useTranslation } from "react-i18next";
import { Icon } from "../../index";
import { styles } from "./option-sheet.styles";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";

type OptionSheetSearchProps = {
  search: string;
  setSearch: (value: string) => void;
};

function OptionSheetSearch({ search, setSearch }: OptionSheetSearchProps) {
  const { t } = useTranslation();

  return (
    <View style={styles.searchShell}>
      <View style={styles.searchContainer}>
        <View style={styles.searchRow}>
          <Icon name="search-line" size={20} color="main/label-secondary" />
          <BottomSheetTextInput
            value={search}
            onChangeText={setSearch}
            placeholder={t("search")}
            placeholderTextColor={styles.searchPlaceholder.color}
            style={styles.searchInput}
          />
        </View>
      </View>
    </View>
  );
}

export default memo(OptionSheetSearch);
