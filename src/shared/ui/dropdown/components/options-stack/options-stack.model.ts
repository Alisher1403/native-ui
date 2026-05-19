import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { LayoutChangeEvent } from "react-native";
import { Gesture } from "react-native-gesture-handler";
import { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import {
  DROPDOWN_BACK_GESTURE_ACTIVE_OFFSET_X,
  DROPDOWN_BACK_GESTURE_TRANSLATION_X,
  DROPDOWN_BACK_GESTURE_VELOCITY_X,
  DROPDOWN_HEIGHT_DURATION,
  DROPDOWN_HEIGHT_EASING,
  DROPDOWN_NAVIGATION_DURATION,
  DROPDOWN_NAVIGATION_EASING,
} from "./options-stack.config";
import type { DropdownOptionsEntry } from "../../dropdown.types";
import type { DropdownOptionsOption } from "../option/option.types";

type DropdownPanel = {
  key: string;
  options: DropdownOptionsEntry[];
};

export function useOptionsStackModel(options: DropdownOptionsEntry[], onHeightChange?: (height: number) => void) {
  const rootPanel = useMemo<DropdownPanel>(() => ({ key: "root", options }), [options]);

  const trimTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelHeightsRef = useRef<Record<string, number>>({});

  const [panelWidth, setPanelWidth] = useState(0);
  const [panels, setPanels] = useState<DropdownPanel[]>([rootPanel]);
  const [activeIndex, setActiveIndex] = useState(0);

  const translateIndex = useSharedValue(0);
  const viewportHeight = useSharedValue(0);

  const clearTrimTimeout = useCallback(() => {
    if (trimTimeoutRef.current) {
      clearTimeout(trimTimeoutRef.current);
      trimTimeoutRef.current = null;
    }
  }, []);

  const goBack = useCallback(() => {
    if (activeIndex === 0) return;

    clearTrimTimeout();

    const nextIndex = activeIndex - 1;
    setActiveIndex(nextIndex);

    trimTimeoutRef.current = setTimeout(() => {
      setPanels(prev => prev.slice(0, nextIndex + 1));
      trimTimeoutRef.current = null;
    }, DROPDOWN_NAVIGATION_DURATION + 40);
  }, [activeIndex, clearTrimTimeout]);

  useEffect(() => {
    clearTrimTimeout();
    setPanels([rootPanel]);
    setActiveIndex(0);
    panelHeightsRef.current = {};
  }, [clearTrimTimeout, rootPanel]);

  useEffect(() => () => clearTrimTimeout(), [clearTrimTimeout]);

  useEffect(() => {
    translateIndex.value = withTiming(activeIndex, {
      duration: DROPDOWN_NAVIGATION_DURATION,
      easing: DROPDOWN_NAVIGATION_EASING,
    });
  }, [activeIndex, translateIndex]);

  useEffect(() => {
    const activePanel = panels[activeIndex];
    if (!activePanel) return;

    const nextHeight = panelHeightsRef.current[activePanel.key];
    if (!nextHeight) return;

    onHeightChange?.(nextHeight);

    viewportHeight.value = withTiming(nextHeight, {
      duration: DROPDOWN_HEIGHT_DURATION,
      easing: DROPDOWN_HEIGHT_EASING,
    });
  }, [activeIndex, onHeightChange, panels, viewportHeight]);

  const viewportAnimatedStyle = useAnimatedStyle(() => ({
    height: viewportHeight.value || undefined,
  }));

  const rowAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: -translateIndex.value * panelWidth }],
  }));

  const handleViewportLayout = useCallback(
    (event: LayoutChangeEvent) => {
      const nextWidth = event.nativeEvent.layout.width;
      if (!nextWidth || nextWidth === panelWidth) return;
      setPanelWidth(nextWidth);
    },
    [panelWidth]
  );

  const handlePanelLayout = useCallback(
    (panelKey: string) => (event: LayoutChangeEvent) => {
      const nextHeight = event.nativeEvent.layout.height;
      if (!nextHeight) return;
      if (panelHeightsRef.current[panelKey] === nextHeight) return;

      panelHeightsRef.current[panelKey] = nextHeight;

      const visiblePanel = panels[activeIndex];
      if (visiblePanel?.key !== panelKey) return;

      onHeightChange?.(nextHeight);

      viewportHeight.value =
        viewportHeight.value === 0
          ? nextHeight
          : withTiming(nextHeight, {
              duration: DROPDOWN_HEIGHT_DURATION,
              easing: DROPDOWN_HEIGHT_EASING,
            });
    },
    [activeIndex, onHeightChange, panels, viewportHeight]
  );

  const openSubmenu = useCallback(
    (entry: DropdownOptionsOption, panelKey: string, entryIndex: number) => {
      const submenuOptions = entry.options;
      if (!submenuOptions?.length) return;

      clearTrimTimeout();

      setPanels(prev => [
        ...prev.slice(0, activeIndex + 1),
        {
          key: `${panelKey}.${entryIndex}`,
          options: submenuOptions,
        },
      ]);
      setActiveIndex(activeIndex + 1);
    },
    [activeIndex, clearTrimTimeout]
  );

  const backGesture = useMemo(
    () =>
      Gesture.Pan()
        .enabled(activeIndex > 0)
        .activeOffsetX(DROPDOWN_BACK_GESTURE_ACTIVE_OFFSET_X)
        .failOffsetY([-12, 12])
        .onEnd(event => {
          if (
            event.translationX > DROPDOWN_BACK_GESTURE_TRANSLATION_X ||
            event.velocityX > DROPDOWN_BACK_GESTURE_VELOCITY_X
          ) {
            runOnJS(goBack)();
          }
        }),
    [activeIndex, goBack]
  );

  return {
    backGesture,
    handlePanelLayout,
    handleViewportLayout,
    openSubmenu,
    panelWidth,
    panels,
    rowAnimatedStyle,
    viewportAnimatedStyle,
  };
}
