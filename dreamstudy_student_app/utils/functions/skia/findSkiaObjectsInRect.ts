import { SkRect } from '@shopify/react-native-skia';
import { SkiaObjects } from '../../types/skia/skiaDrawTypes';
import getSkiaBounds from './getSkiaBounds';

export default function findSkiaObjectsInRect(
  skiaRect: SkRect,
  skiaObjects: SkiaObjects
) {
  const retrievedSkiaObjects: SkiaObjects = [];
  const normalisedSkiaRect: SkRect = {
    x: skiaRect.width < 0 ? skiaRect.x + skiaRect.width : skiaRect.x,
    y: skiaRect.height < 0 ? skiaRect.y + skiaRect.height : skiaRect.y,
    width: Math.abs(skiaRect.width),
    height: Math.abs(skiaRect.height)
  };
  // For the list of skiaObjects passed, perform a bounds check on each skiaObject and then add it to a returned list of skiaObjects
  skiaObjects.forEach(skiaObject => {
    const skiaObjectBounds = getSkiaBounds(skiaObject);
    // Check the bounds if they require changing
    if (
      skiaObjectBounds.x >= normalisedSkiaRect.x &&
      skiaObjectBounds.x + skiaObjectBounds.width <=
        normalisedSkiaRect.x + normalisedSkiaRect.width &&
      skiaObjectBounds.y >= normalisedSkiaRect.y &&
      skiaObjectBounds.y + skiaObjectBounds.height <=
        normalisedSkiaRect.y + normalisedSkiaRect.height
    ) {
      retrievedSkiaObjects.push(skiaObject);
    }
  });

  // Make sure that the retrievedSkiaObjects is not empty or null
  if (
    retrievedSkiaObjects.length > 0 &&
    retrievedSkiaObjects != null &&
    undefined
  ) {
    return retrievedSkiaObjects;
  }

  return undefined;
}
