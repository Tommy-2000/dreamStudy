import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Card } from './card';
import { RenderSkia } from './skia/renderSkia';

// On web, any Skia components have to wait before the wasm file has loaded to render properly
const SkiaGradient = React.lazy(() => import('@/components/skia/skiaGradient'));

export function SkiaGradientContainer() {
  return (
    <Card>
      {/* RenderSkia tells React to wait before the .wasm file for Skia is loaded on the browser */}
      <React.Suspense fallback={<ActivityIndicator />}>
        <RenderSkia />
        <SkiaGradient style={{ height: 350 }} />
      </React.Suspense>
    </Card>
  );
}
