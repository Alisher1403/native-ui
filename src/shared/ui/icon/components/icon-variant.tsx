import { Icons } from "../icon.config";
import { IconVariantProps } from "../icon.types";

export default function IconVariant(props: IconVariantProps) {
  const { name, fontSize = 24, color } = props;
  const IconComponent = Icons[name]["default"];

  return <IconComponent height={fontSize} width={fontSize} color={color} />;
}
