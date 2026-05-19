import React, { useLayoutEffect } from "react";
import { Keyboard, TouchableHighlight, View } from "react-native";
import { styles } from "./header.style";
import { Icon } from "../../../index";
import { Flex } from "../../../index";
import { LayoutHeaderProps } from "./header.types";
import { useUnistyles } from "react-native-unistyles";
import { useNavigation } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/elements";
import { ProgressiveBlurView } from "@sbaiahmed1/react-native-blur";
import { LayoutHeaderComponent, LayoutHeaderRightProps, LayoutHeaderTitleProps } from "./header.types";
import { LayoutHeaderTitle } from "./title/title";
import { getCompoundSlots } from "../../../ui.utils/compound-slots";

export const LayoutHeader = ((props: LayoutHeaderProps) => {
  const { theme, rt } = useUnistyles();
  const navigation = useNavigation();
  const slots = getCompoundSlots(props.children, {
    title: LayoutHeader.Title,
  });

  function goBack() {
    Keyboard.dismiss();
    navigation.goBack();
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      header: () => {
        return (
          <ProgressiveBlurView blurAmount={5}>
            <Flex gap={8} align="center" style={[styles.container, props.style]} {...props}>
              <Flex gap={2} align="center" style={styles.leftContent}>
                <TouchableHighlight style={styles.backButton} onPress={goBack} underlayColor={theme.colors["gray/200"]}>
                  <Icon name="left-line" size="xl" />
                </TouchableHighlight>
                {slots.title}
              </Flex>
              {slots.rest}
            </Flex>
          </ProgressiveBlurView>
        );
      },
    });
  }, [props.children, rt.colorScheme]);

  return null;
}) as LayoutHeaderComponent;

LayoutHeader.Height = function () {
  const headerHeight = useHeaderHeight();
  return <View style={{ height: headerHeight }} />;
};

LayoutHeader.Right = function LayoutHeaderRight(props: LayoutHeaderRightProps) {
  return <Flex justify="flex-end" align="center" {...props} style={[{ marginLeft: "auto" }, props.style]} />;
};

LayoutHeader.Title = LayoutHeaderTitle;
