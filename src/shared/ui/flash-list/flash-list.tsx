import { FlashList as ShopifyFlashList } from "@shopify/flash-list";
import { FlashListProps } from "./flash-list.types";
import { useModel } from "./flash-list.model";
import { ListEmptyComponent } from "./ui";
import { RefreshControl } from "../index";

export default function FlashList<T>(props: FlashListProps<T>) {
  const model = useModel(props);

  return (
    <ShopifyFlashList
      maintainVisibleContentPosition={{ disabled: true }}
      refreshControl={<RefreshControl refreshing={model.isRefreshing} onRefresh={model.handleRefresh} />}
      {...props}
    />
  );
}

FlashList.EmptyComponent = ListEmptyComponent;
