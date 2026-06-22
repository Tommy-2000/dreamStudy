import { Card } from '@/components/card';
import ParallaxScrollCard from '@/components/parallaxScrollCard';
import { SkiaGradientContainer } from '@/components/skiaGradientContainer';
import { TextCard } from '@/components/textCard';
import { supportScreenStyles } from '@/utils/appStyles';
import { FiberProvider } from 'its-fine';
import { useState } from 'react';

export default function SupportScreen() {
  const [data, setData] = useState([0, 1, 2, 3, 4, 5]);

  return (
    // Wrap the root of each screen with FibreProviderto allow for context
    //  to be shared between Skia components that are rendered on the screen
    <FiberProvider>
      <ParallaxScrollCard
        headerBackgroundColor={{}}
        headerBackground={<SkiaGradientContainer />}>
        <Card style={supportScreenStyles.titleContainer}>
          <TextCard type="title">Support</TextCard>
        </Card>
        <TextCard>
          This app includes example code to help you get started.
        </TextCard>
      </ParallaxScrollCard>
    </FiberProvider>
  );
}
