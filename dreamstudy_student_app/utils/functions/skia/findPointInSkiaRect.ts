import { SkPoint, SkRect } from '@shopify/react-native-skia';

export default function findPointInSkiaRect(
  skiaPoint: SkPoint,
  skiaRect: SkRect,
  skiaOffset = 10
) {
  skiaPoint.x + skiaOffset >= skiaRect.x &&
    skiaPoint.x - skiaOffset <= skiaRect.x + skiaRect.width &&
    skiaPoint.y + skiaOffset >= skiaRect.y &&
    skiaPoint.y - skiaOffset <= skiaRect.y + skiaRect.height;
}
