import { SkPoint } from '@shopify/react-native-skia';
import { SkiaObjects, SkiaResizeMode } from '../../types/skia/skiaDrawTypes';
import { getBoundingBox } from './getSkiaBoundingBox';

const hitSlop = 8;

export const findResizeMode = (
  skPoint: SkPoint,
  selectedElements: SkiaObjects
): SkiaResizeMode | undefined => {
  const skiaBoundingBox = getBoundingBox(selectedElements);
  if (!skiaBoundingBox) {
    return undefined;
  }

  if (
    skPoint.x >= skiaBoundingBox.x - hitSlop &&
    skPoint.x <= skiaBoundingBox.x + hitSlop &&
    skPoint.y >= skiaBoundingBox.y - hitSlop &&
    skPoint.y <= skiaBoundingBox.y + hitSlop
  ) {
    return 'topLeft';
  }
  if (
    skPoint.x >= skiaBoundingBox.x + skiaBoundingBox.width - hitSlop &&
    skPoint.x <= skiaBoundingBox.x + skiaBoundingBox.width + hitSlop &&
    skPoint.y >= skiaBoundingBox.y - hitSlop &&
    skPoint.y <= skiaBoundingBox.y + hitSlop
  ) {
    return 'topRight';
  }
  if (
    skPoint.x >= skiaBoundingBox.x + skiaBoundingBox.width - hitSlop &&
    skPoint.x <= skiaBoundingBox.x + skiaBoundingBox.width + hitSlop &&
    skPoint.y >= skiaBoundingBox.y + skiaBoundingBox.height - hitSlop &&
    skPoint.y <= skiaBoundingBox.y + skiaBoundingBox.height + hitSlop
  ) {
    return 'bottomRight';
  }
  if (
    skPoint.x >= skiaBoundingBox.x - hitSlop &&
    skPoint.x <= skiaBoundingBox.x + hitSlop &&
    skPoint.y >= skiaBoundingBox.y + skiaBoundingBox.height - hitSlop &&
    skPoint.y <= skiaBoundingBox.y + skiaBoundingBox.height + hitSlop
  ) {
    return 'bottomLeft';
  }
  return undefined;
};
