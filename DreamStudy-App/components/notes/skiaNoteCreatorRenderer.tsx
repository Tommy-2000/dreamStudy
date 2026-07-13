import { RenderSkia } from '@/components/skia/renderSkia.native';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Card } from '../card';

// On web, any Skia components have to wait before the canvaskit file has loaded to render properly
const SkiaNoteCreator = React.lazy(
  () => import('@/components/notes/skiaNoteCreator')
);

export function SkiaNoteCreatorRenderer() {
  return (
    /* RenderSkia tells React to wait before the canvaskit file for Skia is loaded on the browser */
    /* On Android and iOS, it will skip the canvaskit file and render natively */
    <Card>
      <React.Suspense fallback={<ActivityIndicator />}>
        <RenderSkia />
        <SkiaNoteCreator style={{ height: 500, width: 1000 }} />
      </React.Suspense>
    </Card>
  );
}
