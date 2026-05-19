import React from 'react';
import { Typography } from '../../../../index';
import { LayoutHeaderTitleProps } from '../header.types';
import { useNavigationTransition } from '../../../../ui.hooks/use-navigation-transition';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { useUnistyles } from 'react-native-unistyles';

export function LayoutHeaderTitle(props: LayoutHeaderTitleProps) {
  const { rt } = useUnistyles();
  const { openingProgress, closingProgress } = useNavigationTransition();

  const titleAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: rt.screen.width * openingProgress.value * 0.3 }],
    opacity: closingProgress.value ** 3,
  }));

  return (
    <Animated.View style={[titleAnimatedStyle]}>
      <Typography name="body/semibold" color="main/label" {...props}>
        {props.children}
      </Typography>
    </Animated.View>
  );
}
