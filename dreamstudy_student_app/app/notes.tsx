import { Image } from 'expo-image';

import { Card } from '@/components/ui/react/card';
import ParallaxScrollCard from '@/components/ui/react/cards/parallaxScrollCard';
import { TextCard } from '@/components/ui/react/cards/textCard';
import { RenderSkia } from '@/components/ui/skia/renderSkia';
import { notesScreenStyles } from '@/utils/appStyles';
import React from 'react';
import { ActivityIndicator } from 'react-native';

// On web, any Skia components have to wait before the wasm file has loaded to properly render
const SkiaNoteGallery = React.lazy(
  () => import('@/components/ui/skia/skiaNoteGallery')
);

// const SkiaNotepad = React.lazy(
//   () => import('@/components/ui/skia/skiaNotepad')
// );

export default function NotesScreen() {
  return (
    <ParallaxScrollCard
      headerBackgroundColor={{}}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={notesScreenStyles.reactLogo}
        />
      }>
      <Card style={notesScreenStyles.titleContainer}>
        <TextCard type="title">Notes</TextCard>
      </Card>
      <TextCard>This screen renders a Skia component</TextCard>
      <Card style={{ height: 500 }}>
        {/* RenderSkia tells React to wait before the .wasm file for Skia is properly loaded on the browser */}
        <React.Suspense fallback={<ActivityIndicator />}>
          <RenderSkia />
          <SkiaNoteGallery />
        </React.Suspense>
      </Card>
    </ParallaxScrollCard>
  );
}
