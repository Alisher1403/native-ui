import React from "react";
import { ActivityIndicator, View } from "react-native";
import { styles } from "./content.style";
import { LayoutContentProps } from "./content.types";
import { RefreshControl } from "@src/shared/ui";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { useUnistylesProps } from "../../ui.utils/unistyles";

export function LayoutContent(props: LayoutContentProps) {
  const unistylesProps = useUnistylesProps(props);

  if (props.loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={styles.loadingIndicator.color} />
      </View>
    );
  }

  if (props.scrollEnabled) {
    return (
      <KeyboardAwareScrollView
        bottomOffset={100}
        showsVerticalScrollIndicator={false}
        style={[styles.content(unistylesProps), props.style]}
        contentContainerStyle={styles.contentContainer(unistylesProps)}
        refreshControl={
          props.onRefresh && <RefreshControl refreshing={!!props.refreshing} onRefresh={props.onRefresh} />
        }
        {...props}
      />
    );
  } else {
    return <View style={[styles.content(unistylesProps), props.style]} {...props} />;
  }
}
