import { RefreshControl as RNRefreshControl, RefreshControlProps } from "react-native";
import { useUnistyles } from "react-native-unistyles";
import { useModel } from "./refresh-control.model";

export default function RefreshControl(props: RefreshControlProps) {
  const { theme } = useUnistyles();
  const { isRefreshing, handleRefresh } = useModel(props);

  return (
    <RNRefreshControl
      tintColor={theme.colors["main/primary"]}
      {...props}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
    />
  );
}
