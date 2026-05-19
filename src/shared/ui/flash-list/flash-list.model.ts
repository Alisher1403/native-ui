import { useEffect, useState } from "react";
import { FlashListProps } from "./flash-list.types";

export function useModel(props: FlashListProps<any>) {
  const [isRefreshing, setIsRefreshing] = useState(false);

  function handleRefresh() {
    setIsRefreshing(true);
    if (props.onRefresh) props.onRefresh();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }

  return {
    isRefreshing,
    handleRefresh,
  };
}
