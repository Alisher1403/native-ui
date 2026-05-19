import { useCallback, useEffect, useRef } from "react";
import type { LayoutChangeEvent, View } from "react-native";
import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { withTiming } from "react-native-reanimated";
import {
  DROPDOWN_ENTER_DURATION,
  DROPDOWN_ENTER_EASING,
  DROPDOWN_EXIT_DURATION,
  DROPDOWN_EXIT_EASING,
} from "./dropdown.config";
import { DROPDOWN_HEIGHT_DURATION, DROPDOWN_HEIGHT_EASING } from "./components/options-stack/options-stack.config";
import { DROPDOWN_BOTTOM_MARGIN } from "./dropdown-shift.config";
import type { DropdownProps } from "./dropdown.types";

type ShiftPhase = "enter" | "height";

export function useDropdownShiftModel(props: Pick<DropdownProps, "onLayout" | "shiftValue">) {
  const { onLayout, shiftValue } = props;
  const insets = useSafeAreaInsets();
  const { height: windowHeight } = useWindowDimensions();

  const containerRef = useRef<View>(null);
  const frameRef = useRef<number | null>(null);
  const didEmitEnterRef = useRef(false);
  const lastOverflowRef = useRef<number | null>(null);

  const animateShift = useCallback(
    (overflow: number, phase: ShiftPhase) => {
      if (!shiftValue) return;

      shiftValue.value = withTiming(overflow, {
        duration: phase === "enter" ? DROPDOWN_ENTER_DURATION : DROPDOWN_HEIGHT_DURATION,
        easing: phase === "enter" ? DROPDOWN_ENTER_EASING : DROPDOWN_HEIGHT_EASING,
      });
    },
    [shiftValue]
  );

  const measureOverflow = useCallback(
    (height: number, phase: ShiftPhase) => {
      containerRef.current?.measureInWindow((_, y, __, measuredHeight) => {
        const nextHeight = height || measuredHeight;
        const maxBottom = windowHeight - insets.bottom - DROPDOWN_BOTTOM_MARGIN;
        const overflow = Math.max(0, y + nextHeight - maxBottom);

        if (lastOverflowRef.current === overflow) return;

        lastOverflowRef.current = overflow;
        animateShift(overflow, phase);
      });
    },
    [animateShift, insets.bottom, windowHeight]
  );

  const emitShift = useCallback(
    (height: number, phase: ShiftPhase) => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = requestAnimationFrame(() => {
        measureOverflow(height, phase);
        frameRef.current = null;
      });
    },
    [measureOverflow]
  );

  const handleLayout = useCallback(
    (event: LayoutChangeEvent) => {
      onLayout?.(event);
      if (didEmitEnterRef.current) return;

      didEmitEnterRef.current = true;
      emitShift(event.nativeEvent.layout.height, "enter");
    },
    [emitShift, onLayout]
  );

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
      if (shiftValue) {
        shiftValue.value = withTiming(0, {
          duration: DROPDOWN_EXIT_DURATION,
          easing: DROPDOWN_EXIT_EASING,
        });
      }
    };
  }, [shiftValue]);

  return {
    containerRef,
    emitHeightShift: (height: number) => emitShift(height, "height"),
    handleLayout,
  };
}
