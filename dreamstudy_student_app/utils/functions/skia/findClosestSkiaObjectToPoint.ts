import { SkPoint } from '@shopify/react-native-skia';
import { SkObjects } from '../../types/skia/skiaDrawTypes';
import getSkiaBounds from './getSkiaBounds';

export default function findClosestDrawObjectToPoint(
  skiaPoint: SkPoint,
  skiaObjects: SkObjects
) {
  if (skiaObjects.length === 0) {
    return undefined;
  }

  for (let i = skiaObjects.length - 1; i >= 0; i--) {
    if (skiaObjects[i].path.contains(skiaPoint.x, skiaPoint.y)) {
      return skiaObjects[i];
    }
  }

  const skiaDistance = skiaObjects.map(skiaObject => {
    const skiaRect = getSkiaBounds(skiaObject);

    if (
      skiaPoint.x >= skiaRect.x - 10 &&
      skiaPoint.x < skiaRect.x + skiaRect.width + 10 &&
      skiaPoint.y >= skiaRect.y - 10 &&
      skiaPoint.y < skiaRect.height + 10
    ) {
    }
  });
}
