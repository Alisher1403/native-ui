import Animated from "react-native-reanimated";
import BlurView from "@sbaiahmed1/react-native-blur";
import { Option, OptionsStack, Separator } from "./components";
import { DROPDOWN_BLUR_AMOUNT, DropdownEnterKeyframe, DropdownExitKeyframe } from "./dropdown.config";
import { useDropdownModel } from "./dropdown.model";
import { useDropdownShiftModel } from "./dropdown-shift.model";
import { styles } from "./dropdown.style";
import type { DropdownProps } from "./dropdown.types";

function Dropdown(props: DropdownProps) {
  const model = useDropdownModel(props);
  const shiftModel = useDropdownShiftModel(props);

  return (
    <Animated.View
      ref={shiftModel.containerRef}
      style={[styles.container, model.style]}
      onLayout={shiftModel.handleLayout}
      entering={DropdownEnterKeyframe}
      exiting={DropdownExitKeyframe}
    >
      <BlurView style={styles.root} blurAmount={DROPDOWN_BLUR_AMOUNT} overlayColor={model.overlayColor}>
        <OptionsStack options={model.entries} onHeightChange={shiftModel.emitHeightShift} />
      </BlurView>
    </Animated.View>
  );
}

export default Dropdown;

Dropdown.Option = Option;
Dropdown.Separator = Separator;
