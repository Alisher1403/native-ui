import { RefreshControl as RNRefreshControl, RefreshControlProps } from "react-native";
import { useModel } from "./refresh-control.model";
import { styles } from "./refresh-control.style";

export default function RefreshControl(props: RefreshControlProps) {
  const { isRefreshing, handleRefresh } = useModel(props);

  return (
    <RNRefreshControl
      tintColor={styles.tintColor.color}
      {...props}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
    />
  );
}
