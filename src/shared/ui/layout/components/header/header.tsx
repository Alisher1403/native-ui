import React, { useLayoutEffect } from "react";
import { Keyboard, TouchableHighlight } from "react-native";
import { styles } from "./header.style";
import { Icon } from "../../../index";
import { Flex } from "../../../index";
import { LayoutHeaderProps } from "./header.types";
import { useNavigation } from "@react-navigation/native";
import { ProgressiveBlurView } from "@sbaiahmed1/react-native-blur";
import { LayoutHeaderComponent } from "./header.types";
import { LayoutHeaderTitle } from "./title/title";
import { getCompoundSlots } from "../../../ui.utils/compound-slots";
import { LayoutHeaderHeight } from "./height/height";
import { LayoutHeaderRight } from "./right/right";

export const LayoutHeader = ((props: LayoutHeaderProps) => {
  const navigation = useNavigation();
  const slots = getCompoundSlots(props.children, {
    title: LayoutHeader.Title,
  });
  const underlayColor = styles.backButtonUnderlay.backgroundColor as string;

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
                <TouchableHighlight style={styles.backButton} onPress={goBack} underlayColor={underlayColor}>
                  <Icon name="left-line" size={24} />
                </TouchableHighlight>
                {slots.title}
              </Flex>
              {slots.rest}
            </Flex>
          </ProgressiveBlurView>
        );
      },
    });
  }, [props.children, underlayColor]);

  return null;
}) as LayoutHeaderComponent;

LayoutHeader.Title = LayoutHeaderTitle;
LayoutHeader.Height = LayoutHeaderHeight;
LayoutHeader.Right = LayoutHeaderRight;
