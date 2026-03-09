import { Canvas, Skia } from '@shopify/react-native-skia';
import React, { useState } from 'react';
import { Text } from 'react-native';
import {
    Gesture,
    GestureDetector,
    GestureHandlerRootView
} from 'react-native-gesture-handler';
import { useSharedValue } from 'react-native-reanimated';
import SkiaPen from './skia_pen';

export default function SkiaNotepad() {
  // Create debug state values for tracking gestures
  const [gestureBegin, setGestureBegin] = useState<undefined | string>();
  const [gestureMove, setGestureMove] = useState<undefined | string>();
  const [gestureUpdate, setGestureUpdate] = useState<undefined | string>();
  const [gestureEnd, setGestureEnd] = useState<undefined | string>();

  // Create the SkiaPath object and set it as an reanimated value
  const gesturePath = useSharedValue(Skia.Path.Make().moveTo(0, 0));

  const panGesture = Gesture.Pan()
    .averageTouches(true) // This only works with Android when getting the average position
    .maxPointers(5)
    .onBegin(gesture => {
      // Set debug values to determine gesture position
      setGestureBegin(`${Math.round(gesture.x)}, ${Math.round(gesture.y)}`);
    })
    .onUpdate(gesture => {
      // Set debug values to determine gesture position
      setGestureUpdate(`${Math.round(gesture.x)}, ${Math.round(gesture.y)}`);
    })
    .onEnd(gesture => {
      // Set debug values to determine gesture position
      setGestureEnd(`${Math.round(gesture.x)}, ${Math.round(gesture.y)}}`);
    })
    .minDistance(1);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GestureDetector gesture={panGesture}>
        <Text>{`Gesture has started at: ${gestureBegin}`}</Text>
        <Text>{`Gesture is updating at: ${gestureUpdate}`}</Text>
        <Text>{`Gesture has ended at: ${gestureEnd}`}</Text>
        <Canvas style={{ flex: 2 }}>
          <SkiaPen penPath={gesturePath} />
        </Canvas>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}
