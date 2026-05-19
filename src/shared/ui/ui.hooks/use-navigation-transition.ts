import { useEffect, useRef } from "react";
import { useTransitionProgress } from "react-native-screens";
import { useSharedValue } from "react-native-reanimated";

export function useNavigationTransition() {
  const { progress, closing } = useTransitionProgress();
  const closingProgress = useSharedValue(0);
  const openingProgress = useSharedValue(0);
  const progressRef = useRef(0);
  const closingRef = useRef(0);

  useEffect(() => {
    function syncProgress() {
      const clampedValue = Math.abs(closingRef.current - progressRef.current);
      closingProgress.value = clampedValue;
      openingProgress.value = 1 - clampedValue;
    }

    const closingListener = closing.addListener(({ value }) => {
      closingRef.current = value;
      syncProgress();
    });

    const progressListener = progress.addListener(({ value }) => {
      progressRef.current = value;
      syncProgress();
    });

    return () => {
      progress.removeListener(progressListener);
      closing.removeListener(closingListener);
    };
  }, [closing, closingProgress, openingProgress, progress]);

  return { closingProgress, openingProgress };
}
