import { Image } from 'expo-image';
import { ActivityIndicator } from 'react-native';

import { Card } from '@/components/ui/react/cards/card';
import ParallaxScrollCard from '@/components/ui/react/cards/parallax_scroll_card';
import { TextCard } from '@/components/ui/react/cards/text_card';
import { RenderSkia } from '@/components/ui/skia/render-skia';
import { notesScreenStyles } from '@/styles/screen_styles';
import React from 'react';

// On web, any Skia components have to wait before the wasm file has loaded
// const SkiaIridescent = React.lazy(
//   () => import('@/components/ui/skia/skia_iridescent')
// );

const SkiaNotepad = React.lazy(
  () => import('@/components/ui/skia/skia_notepad')
);

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
          <SkiaNotepad />
        </React.Suspense>
      </Card>
    </ParallaxScrollCard>
  );
}
