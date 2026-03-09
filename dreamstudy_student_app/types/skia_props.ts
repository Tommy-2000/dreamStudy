import { AtlasProps, BlendProps, BoxProps, CanvasProps, ColorProps, GroupProps, ImageProps, LineProps, OvalProps, PaintProps, PatchProps, PathProps, RectProps, TextProps } from "@shopify/react-native-skia";


export type SkiaProps = CanvasProps & BoxProps & PathProps & LineProps & OvalProps & RectProps & PaintProps & PatchProps & AtlasProps & BlendProps & ColorProps & GroupProps & ImageProps & TextProps;

export type SkiaImageProps = ImageProps;

export type SkiaTextProps = TextProps;

