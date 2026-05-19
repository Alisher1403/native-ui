import { UIColorsType, UISpacingType } from "../../../ui.config";
import { ScrollViewProps } from "react-native";

export type LayoutContentProps = ScrollViewProps & {
  bg?: UIColorsType;
  px?: UISpacingType;
  py?: UISpacingType;
  loading?: boolean;
  refreshing?: boolean;
  onRefresh?: () => void;
};
