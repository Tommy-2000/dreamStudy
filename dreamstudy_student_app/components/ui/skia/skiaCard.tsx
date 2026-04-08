import { Canvas } from '@shopify/react-native-skia';
import { useContextBridge } from 'its-fine';
import { PropsWithChildren } from 'react';
import { type ViewProps } from 'react-native';
import { Card } from '../react/card';

export type SkiaCardProps = ViewProps & PropsWithChildren; // Children props are needed for child components

export function SkiaCard({ style: canvasStyle, children }: SkiaCardProps) {
  const SkiaContextBridge = useContextBridge();
  return (
    <Card>
      <Canvas style={canvasStyle}>
        <SkiaContextBridge>{children}</SkiaContextBridge>
      </Canvas>
    </Card>
  );
}
