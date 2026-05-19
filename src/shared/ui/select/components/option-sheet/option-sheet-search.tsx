import { memo } from "react";
import { View } from "react-native";
import { useTranslation } from "react-i18next";
import { useUnistyles } from "react-native-unistyles";
import { Icon } from "../../../index";
import { styles } from "./option-sheet.styles";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";

type OptionSheetSearchProps = {
  search: string;
  setSearch: (value: string) => void;
};

function OptionSheetSearch({ search, setSearch }: OptionSheetSearchProps) {
  const { theme } = useUnistyles();
  const { t } = useTranslation();

  return (
    <View style={styles.searchShell}>
      <View style={[styles.searchContainer, { backgroundColor: theme.colors["system/white"] }]}>
        <View style={styles.searchRow}>
          <Icon name="search-line" size="lg" color="main/label-secondary" />
          <BottomSheetTextInput
            value={search}
            onChangeText={setSearch}
            placeholder={t("search")}
            placeholderTextColor={theme.colors["main/label-secondary"]}
            style={styles.searchInput}
          />
        </View>
      </View>
    </View>
  );
}

export default memo(OptionSheetSearch);
