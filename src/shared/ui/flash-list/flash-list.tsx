import { RefreshControl } from "react-native";
import { FlashList as ShopifyFlashList } from "@shopify/flash-list";
import { useUnistyles } from "react-native-unistyles";
import { FlashListProps } from "./flash-list.types";
import { useModel } from "./flash-list.model";
import { ListEmptyComponent } from "./ui";

export default function FlashList<T>(props: FlashListProps<T>) {
  const model = useModel(props);
  const { theme } = useUnistyles();

  return (
    <ShopifyFlashList
      maintainVisibleContentPosition={{ disabled: true }}
      refreshControl={
        <RefreshControl
          refreshing={model.isRefreshing}
          onRefresh={model.handleRefresh}
          tintColor={theme.colors["main/primary"]}
        />
      }
      {...props}
    />
  );
}

FlashList.EmptyComponent = ListEmptyComponent;
