import { ButtonProps, ImageProps, ModalBaseProps, ModalProps, PressableProps, ScrollViewProps, StatusBarProps, SwitchProps, TextInputProps, TextProps, ViewProps } from "react-native";


export type NativeProps = ViewProps & TextProps & ImageProps & ModalProps & PressableProps & ButtonProps & SwitchProps & StatusBarProps & ModalBaseProps & TextInputProps & ScrollViewProps;

export type NativeTextProps = TextProps;

export type NativeImageProps = ImageProps;