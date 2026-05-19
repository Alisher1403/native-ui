import { memo } from "react";
import type { DropdownSeparatorProps } from "../../dropdown.types";

function Separator(_: DropdownSeparatorProps) {
  return null;
}

Separator.displayName = "Dropdown.Separator";

export default memo(Separator);
