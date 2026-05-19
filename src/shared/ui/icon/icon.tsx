import { useUnistyles } from "react-native-unistyles";
import IconVariant from "./components/icon-variant";
import { Icons } from "./icon.config";
import { IconProps } from "./icon.types";

export default function Icon(props: IconProps) {
  const { name, size, color } = props;
  const { theme } = useUnistyles();
  const IconComponent = Icons[name]["default"];
  const iconSize = theme.fontSize[size || "xl"];
  const iconColor = theme.colors[color || "main/label"];

  return <IconComponent height={iconSize} width={iconSize} color={iconColor} />;
}

Icon.Variant = IconVariant;
