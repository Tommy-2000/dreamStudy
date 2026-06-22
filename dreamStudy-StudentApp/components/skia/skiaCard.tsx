import { Canvas, CanvasProps } from '@shopify/react-native-skia';
import { useContextBridge } from 'its-fine';
import { PropsWithChildren } from 'react';

// Any Skia Canvas components with children will have context shared between them using the contextBridge
export function SkiaCard(
  { ref, style, children }: CanvasProps & PropsWithChildren // Children props are needed for child components
) {
  const SkiaContextBridge = useContextBridge();
  return (
    <Canvas ref={ref} style={style}>
      <SkiaContextBridge>{children}</SkiaContextBridge>
    </Canvas>
  );
}
