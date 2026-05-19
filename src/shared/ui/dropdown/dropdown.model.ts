import { useMemo } from "react";
import { useUnistyles } from "react-native-unistyles";
import { createDropdownEntries } from "./dropdown.helpers";
import type { DropdownProps } from "./dropdown.types";

export function useDropdownModel(props: DropdownProps) {
  const { theme } = useUnistyles();
  const entries = useMemo(() => createDropdownEntries(props.children), [props.children]);
  const overlayColor = useMemo(() => theme.alpha("gray/100", 0.7), [theme]);

  return {
    entries,
    overlayColor,
    style: props.style,
  };
}
