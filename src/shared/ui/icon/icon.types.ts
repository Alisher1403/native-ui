import { UIColorsType } from "../ui.config";
import { Icons } from "./icon.config";

export type IconProps = {
  name: keyof typeof Icons;
  size?: number;
  color?: UIColorsType;
};

export type IconVariantProps = {
  name: keyof typeof Icons;
  color?: string;
  fontSize?: number;
};

export type IconName = keyof typeof Icons;
