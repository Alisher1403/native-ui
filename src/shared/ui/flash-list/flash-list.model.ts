import { useState } from "react";
import { FlashListProps } from "./flash-list.types";

export function useModel(props: FlashListProps<any>) {
  const [isInternallyRefreshing, setIsInternallyRefreshing] = useState(false);

  async function handleRefresh() {
    setIsInternallyRefreshing(true);

    try {
      await props.onRefresh?.();
    } finally {
      setIsInternallyRefreshing(false);
    }
  }

  return {
    isRefreshing: props.refreshing ?? isInternallyRefreshing,
    handleRefresh,
  };
}
