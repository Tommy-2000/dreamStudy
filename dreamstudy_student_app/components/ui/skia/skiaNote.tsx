import { useSkiaDrawProvider } from '@/hooks/skia/useSkiaDrawProvider';
import React, { useState } from 'react';
import { Text } from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView
} from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SkiaNote() {
  // Create debug state values for tracking gestures
  const [gestureBegin, setGestureBegin] = useState<undefined | string>();
  const [gestureUpdate, setGestureUpdate] = useState<undefined | string>();
  const [gestureEnd, setGestureEnd] = useState<undefined | string>();

  // Retrieve the providers for Skia drawing and the outer UI for the note
  const SkiaDrawProvider = useSkiaDrawProvider();

  // // Create the SkiaPath object and set it as an reanimated value
  // const gesturePath = useSharedValue(Skia.Path.Make().moveTo(0, 0));

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
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
          <Text
            style={{
              color: 'white',
              fontSize: 24
            }}>{`Gesture has started at: ${gestureBegin}`}</Text>
          <Text
            style={{
              color: 'white',
              fontSize: 24
            }}>{`Gesture is updating at: ${gestureUpdate}`}</Text>
          <Text
            style={{
              color: 'white',
              fontSize: 24
            }}>{`Gesture has ended at: ${gestureEnd}`}</Text>
        </SafeAreaView>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}
