import { Image } from 'expo-image';

import { Card } from '@/components/ui/react/card';
import { SkiaNoteContainer } from '@/components/ui/react/notes/skiaNoteContainer';
import ParallaxScrollCard from '@/components/ui/react/parallaxScrollCard';
import { TextCard } from '@/components/ui/react/textCard';
import { imagePlaceholderHash } from '@/utils/appConstants';
import { notesScreenStyles } from '@/utils/appStyles';
import { FiberProvider } from 'its-fine';
import React from 'react';

export default function NotesScreen() {
  return (
    // Wrap the root of each screen with FibreProviderto allow for context
    //  to be shared between Skia components that are rendered on the screen
    <FiberProvider>
      <ParallaxScrollCard
        headerBackgroundColor={{}}
        headerImage={
          // When handling images from the assets folder, render the placeholder hash first
          <Image
            source={require('@/assets/images/partial-react-logo.png')}
            placeholder={imagePlaceholderHash}
            contentFit="cover"
            transition={1000}
            style={notesScreenStyles.reactLogo}
          />
        }>
        <Card style={notesScreenStyles.titleContainer}>
          <TextCard type="title">Notes</TextCard>
        </Card>
        <TextCard>
          The SkiaNoteContainer component renders a Skia component inside a
          React Suspense component
        </TextCard>
        <SkiaNoteContainer />
      </ParallaxScrollCard>
    </FiberProvider>
  );
}
