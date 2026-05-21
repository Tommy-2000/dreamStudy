import { textStyles } from '@/utils/appStyles';
import { AccessibilityProps, TextProps, ViewProps } from 'react-native';
import { UnistylesValues, UnistylesVariants } from 'react-native-unistyles';

export type CardProps = ViewProps & AccessibilityProps & UnistylesValues;

export type TextCardProps = TextProps & UnistylesVariants<typeof textStyles>;
