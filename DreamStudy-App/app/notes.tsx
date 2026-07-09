import { Card } from '@/components/card';
import ParallaxScrollCard from '@/components/parallaxScrollCard';
import { SkiaGradientRenderer } from '@/components/skiaGradientRenderer';
import { TextCard } from '@/components/textCard';
import { appStore } from '@/state/appStores';
import { notesScreenStyles } from '@/utils/appStyles';
import { FiberProvider } from 'its-fine';
import React from 'react';
import { Provider } from 'react-redux';
import { SkiaNoteCreatorRenderer } from '../components/notes/skiaNoteCreatorRenderer';

export default function NotesScreen() {
  return (
    // Wrap the root of each screen with FibreProvider to allow for context
    //  to be shared between Skia components that are rendered on the screen
    // Provider is for Redux state and FibreProvider is for Skia context sharing
    <Provider store={appStore}>
      <FiberProvider>
        <ParallaxScrollCard
          headerBackgroundColor={{}}
          headerBackground={<SkiaGradientRenderer />}>
          <Card style={notesScreenStyles.titleContainer}>
            <TextCard type="title">Notes</TextCard>
          </Card>
          <TextCard>
            The SkiaCarouselContainer component renders multiple Skia components
            inside a React Suspense component
          </TextCard>
          <TextCard>
            The SkiaNoteContainer component renders a Skia component inside a
            React Suspense component
          </TextCard>
          <SkiaNoteCreatorRenderer />
        </ParallaxScrollCard>
      </FiberProvider>
    </Provider>
  );
}
