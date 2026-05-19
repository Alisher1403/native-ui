import { BottomSheetModal, BottomSheetModalProps } from "@gorhom/bottom-sheet";
import React from "react";

export type BottomSheetProps = BottomSheetModalProps & {
  children: React.ReactNode;
  ref?: React.Ref<BottomSheetModal>;
  headerComponent?: React.ReactNode;
};
