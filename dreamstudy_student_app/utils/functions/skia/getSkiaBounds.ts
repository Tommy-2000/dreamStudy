import { SkRect } from '@shopify/react-native-skia';
import { SkiaObject } from '../../types/skia/skiaDrawTypes';

export default function getSkiaBounds(skiaDrawObject: SkiaObject): SkRect {
  return (
    skiaDrawObject.skiaPath.getBounds() || // Return SkRect with maximum and minimum values of a SkPoint array
    skiaDrawObject.skiaPath.computeTightBounds() // Same method but works with curves and doesn't cache the result
  );
}
