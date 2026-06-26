import { getBoundingBox } from '@/utils/functions/skia/getSkiaBoundingBox';
import { SkObjects } from '@/utils/types/skia/skiaDrawProps';
import { Group, Rect, Skia, SkRect } from '@shopify/react-native-skia';
import { useRef } from 'react';
import { useDerivedValue } from 'react-native-reanimated';
import { SkiaSelectionHandle } from './skiaSelectionHandle';

interface SkiaSelectionFrameProps {
  selectedSkiaObjects: SkObjects;
}

const selectionHandleSize = 6;
export function SkiaSelectionFrame({
  selectedSkiaObjects
}: SkiaSelectionFrameProps) {
  // Initialising the Ref with an empty SkiaRect is better than undefined
  const skiaBoundingBoxRef = useRef<SkRect>(Skia.XYWHRect(0, 0, 0, 0));

  const selectionHandleValue = skiaBoundingBoxRef.current;

  // Pass the selected SkRects with updated bounding box values without re-rendering
  const skRectDerivedValue = useDerivedValue(() => {
    skiaBoundingBoxRef.current = getBoundingBox(selectedSkiaObjects);
    return skiaBoundingBoxRef.current;
  });

  return selectedSkiaObjects.length > 0 ? (
    <Group>
      <Rect
        rect={skRectDerivedValue}
        color="#4185F4"
        strokeWidth={2}
        style="stroke"
      />
      <Rect rect={selectionHandleValue} color="#4185F418" style="fill" />
      <SkiaSelectionHandle
        x={selectionHandleValue.x}
        y={selectionHandleValue.y}
        size={selectionHandleSize}
      />
      <SkiaSelectionHandle
        x={selectionHandleValue.x + selectionHandleValue.width}
        y={selectionHandleValue.y}
        size={selectionHandleSize}
      />
      <SkiaSelectionHandle
        x={selectionHandleValue.x + selectionHandleValue.width}
        y={selectionHandleValue.y + selectionHandleValue.height}
        size={selectionHandleSize}
      />
      <SkiaSelectionHandle
        x={selectionHandleValue.x}
        y={selectionHandleValue.y + selectionHandleValue.height}
        size={selectionHandleSize}
      />
    </Group>
  ) : null;
}
