import { Canvas, CanvasProps } from '@shopify/react-native-skia';
import { useContextBridge } from 'its-fine';
import { PropsWithChildren } from 'react';

export type SkiaCardProps = CanvasProps & PropsWithChildren; // Children props are needed for child components

// Any Skia Canvas components with children will have context shared between them using the contextBridge
export function SkiaCard({
  ref: canvasRef,
  style: canvasStyle,
  children
}: SkiaCardProps) {
  const SkiaContextBridge = useContextBridge();
  return (
    <Canvas ref={canvasRef} style={canvasStyle}>
      <SkiaContextBridge>{children}</SkiaContextBridge>
    </Canvas>
  );
}
