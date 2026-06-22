import { textStyles } from '@/utils/appStyles';
import {
    AccessibilityProps,
    StyleProp,
    TextProps,
    ViewProps,
    ViewStyle
} from 'react-native';
import { AnimatedStyle } from 'react-native-reanimated';
import { UnistylesValues, UnistylesVariants } from 'react-native-unistyles';

export type CardProps = ViewProps & AccessibilityProps & UnistylesValues;

export type AnimatedCardProps = {
  animatedStyle: StyleProp<AnimatedStyle<StyleProp<ViewStyle>>>;
} & Omit<CardProps, 'style'>; // Remove style and type animatedStyle as a prop

export type TextCardProps = TextProps & UnistylesVariants<typeof textStyles>;
