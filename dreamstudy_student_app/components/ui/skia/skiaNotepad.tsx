import { Group, Rect } from '@shopify/react-native-skia';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import {
  Gesture
} from 'react-native-gesture-handler';
import {
  useDerivedValue,
  useSharedValue,
  withDecay
} from 'react-native-reanimated';
import { SkiaGestureCard } from './skiaGestureCard';

export default function SkiaNotepad() {
  const { width } = useWindowDimensions();
  const notepadLeftBoundary = 0;
  const notepadRightBoundary = width;
  const translateChangeX = useSharedValue(0);
  const translateChangeY = useSharedValue(1);

  // The scale factor starts at 1 and increases by this amount when responding to pitch gestures
  const pitchScale = useSharedValue(1);

  const panGesture = Gesture.Pan()
    .averageTouches(true) // This only works with Android when getting the average position
    .maxPointers(5)
    .onChange(gesture => {
      translateChangeX.value += gesture.changeX;
    })
    .onEnd(gesture => {
      translateChangeX.value = withDecay({
        velocity: gesture.velocityX,
        clamp: [notepadLeftBoundary, notepadRightBoundary]
      });
    })
    .minDistance(1);

  const pinchGesture = Gesture.Pinch().onUpdate(pinch => {});

  const padTransform = useDerivedValue(() => {
    return [{ translateX: translateChangeX.value }];
  });

  return (
    <SkiaGestureCard gesture={panGesture}>
      <Group transform={padTransform}>
        <Rect x={0} y={0} width={256} height={256} color="red" />
      </Group>
    </SkiaGestureCard>
  );
}
