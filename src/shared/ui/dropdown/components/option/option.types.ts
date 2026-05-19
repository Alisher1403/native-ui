import type { ReactNode } from "react";
import type { IconName } from "../../../icon/icon.types";
import type { UIColorsType } from "../../../ui.config";
import type { DropdownOptionsEntry } from "../../dropdown.types";

export type DropdownOptionsOption = {
  icon: IconName;
  label: string;
  onPress?: () => void;
  color?: UIColorsType;
  disabled?: boolean;
  hidden?: boolean;
  /** Nested menu; when present and non-empty, tap opens a sub-panel instead of `onPress`. */
  options?: DropdownOptionsEntry[];
};

export type DropdownOptionProps = {
  icon: IconName;
  label: string;
  onPress?: () => void;
  color?: UIColorsType;
  disabled?: boolean;
  hidden?: boolean;
  children?: ReactNode;
};
