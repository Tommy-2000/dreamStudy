import { Skia } from '@shopify/react-native-skia';
import { SkObjects } from '../../types/skia/skiaDrawProps';
import getSkiaBounds from './getSkiaBounds';

export const getBoundingBox = (skiaDrawObjects: SkObjects) => {
  if (skiaDrawObjects.length === 0) {
    // Returning an empty SkiaRect is better than undefined
    return Skia.XYWHRect(0, 0, 0, 0);
  }

  const skiaBoundingBox = {
    x: Number.MAX_VALUE,
    y: Number.MAX_VALUE,
    right: Number.MIN_VALUE,
    bottom: Number.MIN_VALUE
  };

  for (let i = 0; i < skiaDrawObjects.length; i++) {
    const skiaDrawObject = skiaDrawObjects[i];
    const skiaBounds = getSkiaBounds(skiaDrawObject);

    if (skiaBounds.x < skiaBoundingBox.x) {
      skiaBoundingBox.x = skiaBounds.x;
    }
    if (skiaBounds.y < skiaBoundingBox.y) {
      skiaBoundingBox.y = skiaBounds.y;
    }
    if (skiaBounds.x + skiaBounds.width > skiaBoundingBox.right) {
      skiaBoundingBox.right = skiaBounds.x + skiaBounds.width;
    }
    if (skiaBounds.y + skiaBounds.height > skiaBoundingBox.bottom) {
      skiaBoundingBox.bottom = skiaBounds.y + skiaBounds.height;
    }
  }

  return {
    x: skiaBoundingBox.x,
    y: skiaBoundingBox.y,
    width: skiaBoundingBox.right - skiaBoundingBox.x,
    height: skiaBoundingBox.bottom - skiaBoundingBox.y
  };
};
