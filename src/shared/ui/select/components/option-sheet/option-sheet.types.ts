import React from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { SelectProps } from "../../select.types";

export type OptionSheetProps = SelectProps & {
  ref: React.RefObject<BottomSheetModal | null>;
  onSelect: (option: SelectProps["value"]) => void;
};
