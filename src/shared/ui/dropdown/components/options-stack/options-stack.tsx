import { memo } from "react";
import { View } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { useOptionsStackModel } from "./options-stack.model";
import { styles } from "./options-stack.style";
import OptionRow from "../option/option-row";
import SeparatorLine from "../separator/separator-line";
import type { DropdownOptionsEntry } from "../../dropdown.types";

const isSeparator = (entry: DropdownOptionsEntry): entry is Extract<DropdownOptionsEntry, { separator: true }> =>
  "separator" in entry;

function OptionsStack({
  options,
  onHeightChange,
}: {
  options: DropdownOptionsEntry[];
  onHeightChange?: (height: number) => void;
}) {
  const model = useOptionsStackModel(options, onHeightChange);

  return (
    <GestureDetector gesture={model.backGesture}>
      <Animated.View
        style={[styles.navigator, styles.viewport, model.viewportAnimatedStyle]}
        onLayout={model.handleViewportLayout}
      >
        <Animated.View style={[styles.panelsRow, model.rowAnimatedStyle]}>
          {model.panels.map(panel => (
            <View
              key={panel.key}
              style={[styles.panel, model.panelWidth ? { width: model.panelWidth } : null]}
              onLayout={model.handlePanelLayout(panel.key)}
            >
              {panel.options.map((entry, entryIndex) =>
                !isSeparator(entry) && entry.hidden ? null : isSeparator(entry) ? (
                  <SeparatorLine key={`sep-${panel.key}-${entryIndex}`} />
                ) : (
                  <OptionRow
                    key={`option-${panel.key}-${entryIndex}`}
                    icon={entry.icon}
                    label={entry.label}
                    color={entry.color}
                    disabled={entry.disabled}
                    onPress={
                      entry.options?.length ? () => model.openSubmenu(entry, panel.key, entryIndex) : entry.onPress
                    }
                  />
                )
              )}
            </View>
          ))}
        </Animated.View>
      </Animated.View>
    </GestureDetector>
  );
}

export default memo(OptionsStack);
