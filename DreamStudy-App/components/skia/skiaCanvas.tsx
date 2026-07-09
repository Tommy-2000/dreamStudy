import { Canvas, CanvasProps } from '@shopify/react-native-skia';
import { useContextBridge } from 'its-fine';
import { PropsWithChildren } from 'react';

// Any Skia Canvas components with children will have context shared between them using the contextBridge
export function SkiaCanvas(
  { ref, style, children }: CanvasProps & PropsWithChildren // Children props are needed for child components
) {
  // React Context currently cannot be shared across React renderers but explicitly forwarded between providers (see react#17275).
  // This hook returns a ContextBridge of live context providers to pierce Context across renderers.
  const SkiaContextBridge = useContextBridge();
  return (
    <Canvas ref={ref} style={style}>
      <SkiaContextBridge>{children}</SkiaContextBridge>
    </Canvas>
  );
}
