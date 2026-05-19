import { useState } from "react";
import { RefreshControlProps } from "react-native";

export function useModel(props: RefreshControlProps) {
  const [isRefreshing, setIsRefreshing] = useState(false);

  function handleRefresh() {
    setIsRefreshing(true);
    if (props.onRefresh) props.onRefresh();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 700);
  }

  return {
    isRefreshing,
    handleRefresh,
  };
}
