import { SkColor, Skia, SkSize } from '@shopify/react-native-skia';
import { SkiaDrawObject, SkiaPathType } from '../types/skia/skiaDrawTypes';

export const createSkiaPath = (
  x: number,
  y: number,
  color: SkColor,
  size: SkSize,
  skiaPathType: SkiaPathType
): SkiaDrawObject => {
  const skiaPath = Skia.Path.Make();
  skiaPath.moveTo(x, y);
  return {
    skiaDrawingType: 'path',
    skiaPath,
    skiaType: 'path',
    color,
    size,
    skiaPathType
  };
};
