import { Easing, Keyframe } from "react-native-reanimated";

export const DROPDOWN_BLUR_AMOUNT = 20;
export const DROPDOWN_ENTER_DURATION = 300;
export const DROPDOWN_ENTER_EASING = Easing.elastic(1);
export const DROPDOWN_EXIT_DURATION = 300;
export const DROPDOWN_EXIT_EASING = Easing.back(0.5);

export const DropdownEnterKeyframe = new Keyframe({
  from: {
    transform: [{ scale: 0 }],
  },
  to: {
    transform: [{ scale: 1 }],
    easing: DROPDOWN_ENTER_EASING,
  },
}).duration(DROPDOWN_ENTER_DURATION);

export const DropdownExitKeyframe = new Keyframe({
  from: {
    transform: [{ scale: 1 }],
  },
  to: {
    transform: [{ scale: 0 }],
    easing: DROPDOWN_EXIT_EASING,
  },
}).duration(DROPDOWN_EXIT_DURATION);
