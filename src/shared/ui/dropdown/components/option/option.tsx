import { memo } from "react";
import type { DropdownOptionProps } from "./option.types";

function Option(_: DropdownOptionProps) {
  return null;
}

Option.displayName = "Dropdown.Option";

export default memo(Option);
