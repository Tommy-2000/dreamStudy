import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RenderSkia } from '../../skia/renderSkia';
import { Card } from '../card';

// On web, any Skia components have to wait before the wasm file has loaded to render properly
const SkiaNote = React.lazy(() => import('@/components/ui/skia/skiaNote'));

export function SkiaNoteContainer() {
  return (
    <Card>
      {/* RenderSkia tells React to wait before the .wasm file for Skia is loaded on the browser */}
      <React.Suspense fallback={<ActivityIndicator />}>
        <RenderSkia />
        <SkiaNote style={{ height: 500, width: 1000 }} />
      </React.Suspense>
    </Card>
  );
}
