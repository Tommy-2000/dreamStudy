import { Card } from '@/components/card';
import ParallaxScrollCard from '@/components/parallaxScrollCard';
import { SkiaGradientContainer } from '@/components/skiaGradientContainer';
import { TextCard } from '@/components/textCard';
import { notesScreenStyles } from '@/utils/appStyles';
import { FiberProvider } from 'its-fine';
import React from 'react';
import { SkiaNoteContainer } from '../components/notes/skiaNoteContainer';

export default function NotesScreen() {
  return (
    // Wrap the root of each screen with FibreProviderto allow for context
    //  to be shared between Skia components that are rendered on the screen
    <FiberProvider>
      <ParallaxScrollCard
        headerBackgroundColor={{}}
        headerBackground={<SkiaGradientContainer />}>
        <Card style={notesScreenStyles.titleContainer}>
          <TextCard type="title">Notes</TextCard>
        </Card>
        <TextCard>
          The SkiaCarouselContainer component renders multiple Skia components
          inside a React Suspense component
        </TextCard>

        {/* <SkiaNoteCarouselStack noteData={}/> */}

        <TextCard>
          The SkiaNoteContainer component renders a Skia component inside a
          React Suspense component
        </TextCard>
        <SkiaNoteContainer />
      </ParallaxScrollCard>
    </FiberProvider>
  );
}
