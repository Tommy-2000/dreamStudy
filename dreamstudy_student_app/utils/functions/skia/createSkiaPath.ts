import { SkColor, Skia, SkSize } from '@shopify/react-native-skia';
import { SkiaObject, SkiaPathType } from '../../types/skia/skiaDrawTypes';

export default function createSkiaPath(
  x: number,
  y: number,
  color: SkColor,
  size: SkSize,
  skiaPathType: SkiaPathType
): SkiaObject {
  const skiaPath = Skia.Path.Make();
  skiaPath.moveTo(x, y);
  return {
    skiaDrawingType: 'path',
    path: skiaPath,
    skiaType: 'path',
    color,
    size,
    pathType: skiaPathType
  };
}
