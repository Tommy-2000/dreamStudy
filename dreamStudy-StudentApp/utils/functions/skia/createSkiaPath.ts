import { SkColor, Skia, SkSize } from '@shopify/react-native-skia';
import { SkiaObject, SkiaPathPropType } from '../../types/skia/skiaDrawProps';

export default function createSkiaPath(
  x: number,
  y: number,
  color: SkColor,
  size: SkSize,
  skiaPathType: SkiaPathPropType
): SkiaObject {
  const skiaPath = Skia.Path.Make();
  skiaPath.moveTo(x, y);
  return {
    skiaDrawingProps: 'path',
    path: skiaPath,
    skiaPropType: 'path',
    color,
    size,
    pathPropType: skiaPathType
  };
}
