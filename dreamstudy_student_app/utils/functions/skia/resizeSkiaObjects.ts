import type { SkRect } from '@shopify/react-native-skia';
import { processTransform2d } from '@shopify/react-native-skia';
import { SkObjects, SkiaResizeMode } from '../../types/skia/skiaDrawTypes';
import { getBoundingBox as getSkiaBoundingBox } from './getSkiaBoundingBox';

export const resizeElementsBy = (
  sx: number,
  sy: number,
  skResizeMode: SkiaResizeMode | undefined,
  skObjects: SkObjects
) => {
  const skiaSource = getSkiaBoundingBox(skObjects);
  if (skiaSource === undefined) {
    return;
  }
  let dest: SkRect;
  switch (skResizeMode) {
    case 'topLeft':
      dest = resizeBounds(sx, sy, -sx, -sy, skiaSource);
      break;
    case 'topRight':
      dest = resizeBounds(0, sy, sx, -sy, skiaSource);
      break;
    case 'bottomLeft':
      dest = resizeBounds(sx, 0, -sx, sy, skiaSource);
      break;
    case 'bottomRight':
      dest = resizeBounds(0, 0, sx, sy, skiaSource);
      break;
    case undefined:
      dest = resizeBounds(sx, sy, 0, 0, skiaSource);
      break;
    default:
      return;
  }

  if (dest.width <= 0 || dest.height <= 0) {
    return;
  }

  const scaleX = dest.width / skiaSource.width;
  const scaleY = dest.height / skiaSource.height;
  const translateX = dest.x - skiaSource.x * scaleX;
  const translateY = dest.y - skiaSource.y * scaleY;
  const skiaMatrix = processTransform2d([
    { translateX },
    { translateY },
    { scaleX },
    { scaleY }
  ]);
  // use to scale elements
  for (let i = 0; i < skObjects.length; i++) {
    const skiaObject = skObjects[i];
    skiaObject.path.transform(skiaMatrix);
  }
};

const resizeBounds = (
  x: number,
  y: number,
  r: number,
  b: number,
  bounds: SkRect
) => ({
  x: bounds.x + x,
  y: bounds.y + y,
  width: bounds.width + r,
  height: bounds.height + b
});
