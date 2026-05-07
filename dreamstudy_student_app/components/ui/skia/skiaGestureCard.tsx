import { Canvas } from '@shopify/react-native-skia';
import { useContextBridge } from 'its-fine';
import {
  ComposedGesture,
  GestureDetector,
  GestureHandlerRootView,
  GestureType
} from 'react-native-gesture-handler';
import { Card } from '../react/card';
import { SkiaCardProps } from './skiaCard';

export type SkiaGestureCardProps = {
  gesture: ComposedGesture | GestureType; // Any gesture type can be passed as a prop to this component
} & SkiaCardProps;

export function SkiaGestureCard({
  ref: canvasRef,
  style: canvasStyle,
  style: gestureDetectorStyle,
  gesture,
  children
}: SkiaGestureCardProps) {
  const SkiaContextBridge = useContextBridge();
  return (
    <Card>
      <GestureHandlerRootView style={gestureDetectorStyle}>
        <GestureDetector gesture={gesture}>
          <Canvas ref={canvasRef} style={canvasStyle}>
            <SkiaContextBridge>{children}</SkiaContextBridge>
          </Canvas>
        </GestureDetector>
      </GestureHandlerRootView>
    </Card>
  );
}
