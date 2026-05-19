import React from "react";
import { Keyboard, StyleSheet, View } from "react-native";
import { Button, Division, Flex, Typography } from "../../index";

export type BottomSheetHeaderProps = {
  title?: string;
  onClosePress?: () => void;
  onBackPress?: () => void;
  children?: React.ReactNode;
};

export default function BottomSheetHeader(props: BottomSheetHeaderProps) {
  function handleClosePress() {
    props.onClosePress?.();
    Keyboard.dismiss();
  }

  return (
    <Division py={2}>
      <Flex gap={8} align="center" justify="space-between">
        <View style={styles.buttonWrapper}>
          {props.onBackPress ? (
            <Button icon="left-line" style={styles.button} onPress={props.onBackPress} />
          ) : undefined}
        </View>
        <Typography name="body/semibold" color="main/label" align="center" flex adjustsFontSizeToFit numberOfLines={2}>
          {props.title}
        </Typography>
        <View style={styles.buttonWrapper}>
          {props.onClosePress ? (
            <Button icon="close-line" style={styles.button} onPress={handleClosePress} />
          ) : undefined}
        </View>
      </Flex>
      <View>{props.children}</View>
    </Division>
  );
}

const styles = StyleSheet.create({
  button: {
    aspectRatio: 1,
    height: 40,
    minHeight: "auto",
  },
  buttonWrapper: {
    width: 40,
    height: 40,
    aspectRatio: 1,
  },
});
