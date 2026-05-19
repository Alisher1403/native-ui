import React from "react";
import { Division } from "../../../index";
import { DivisionProps } from "@src/shared/ui/division/division.types";
import { KeyboardStickyView } from "react-native-keyboard-controller";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type LayoutFooterProps = DivisionProps & {
  children: React.ReactNode;
  inset?: boolean | number;
  sticky?: boolean;
};

export function LayoutFooter(props: LayoutFooterProps) {
  const insets = useSafeAreaInsets();

  if (!props.sticky) return <Division p={8} bg="system/white" {...props} />;

  return (
    <KeyboardStickyView offset={{ opened: 0, closed: -insets.bottom }}>
      <Division p={8} bg="system/white" {...props} />
    </KeyboardStickyView>
  );
}

LayoutFooter.displayName = "LayoutFooter";
