import { Group, Rect } from '@shopify/react-native-skia';
import { useDerivedValue } from 'react-native-reanimated';

export type SkiaSelectionHandleProps = {
  x: number;
  y: number;
  size: number;
};

export function SkiaSelectionHandle({ x, y, size }: SkiaSelectionHandleProps) {
  // Pass the X and Y with updated values without re-rendering
  const derivedX = useDerivedValue(() => {
    return x - size / 2;
  });

  const derivedY = useDerivedValue(() => {
    return y - size / 2;
  });

  return (
    <Group>
      <Rect
        x={derivedX}
        y={derivedY}
        width={size}
        height={size}
        color="#4185F4"
        strokeWidth={4}
        style="stroke"
      />
      <Rect
        x={derivedX}
        y={derivedY}
        width={size}
        height={size}
        color="#FFF"
        style="fill"
      />
    </Group>
  );
}
