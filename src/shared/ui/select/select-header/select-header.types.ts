import React from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { SelectProps } from "../select.types";

export type SelectHeaderProps = SelectProps & {
  optionsMap: Map<any, SelectProps["options"][0]>;
  sheetRef: React.RefObject<BottomSheetModal | null>;
  onClear: () => void;
  onOpenPress: () => void;
};
