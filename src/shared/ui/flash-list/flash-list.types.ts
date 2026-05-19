import { FlashListProps as ShopifyFlashListProps } from "@shopify/flash-list";

export type FlashListProps<T> = ShopifyFlashListProps<T> & {
  refreshing?: boolean;
  onRefresh?: () => void;
};
