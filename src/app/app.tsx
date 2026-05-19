import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { I18nextProvider } from "react-i18next";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { TrueSheetProvider } from "@lodev09/react-native-true-sheet";
import { Navigation } from "./providers/navigation";

import i18n from "@src/shared/config/i18n";
import "@src/shared/styles/themes";

export default function App() {
  return (
    <GestureHandlerRootView style={styles.root}>
      <StatusBar translucent backgroundColor="transparent" />
      <I18nextProvider i18n={i18n}>
        <SafeAreaProvider>
          <KeyboardProvider>
            <TrueSheetProvider>
              <BottomSheetModalProvider>
                <Navigation />
              </BottomSheetModalProvider>
            </TrueSheetProvider>
          </KeyboardProvider>
        </SafeAreaProvider>
      </I18nextProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
