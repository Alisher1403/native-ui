import IconVariant from "./icon-variant";
import { Icons } from "./icon.config";
import { styles } from "./icon.style";
import { IconProps } from "./icon.types";
import { useUnistylesProps } from "../ui.utils/unistyles";

function Icon(props: IconProps) {
  const { name } = props;
  const unistylesProps = useUnistylesProps(props);
  const IconComponent = Icons[name]["default"];
  const iconStyle = styles.icon(unistylesProps) as { fontSize: number; color: string };

  return <IconComponent height={iconStyle.fontSize} width={iconStyle.fontSize} color={iconStyle.color} />;
}

Icon.Variant = IconVariant;

export default Icon;
