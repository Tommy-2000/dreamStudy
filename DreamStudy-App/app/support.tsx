import { Card } from '@/components/card';
import ParallaxScrollCard from '@/components/parallaxScrollCard';
import { SkiaGradientRenderer } from '@/components/skiaGradientRenderer';
import { TextCard } from '@/components/textCard';
import { appStore } from '@/state/appStores';
import { supportScreenStyles } from '@/utils/appStyles';
import { FiberProvider } from 'its-fine';
import { useState } from 'react';
import { Provider } from 'react-redux';

export default function SupportScreen() {
  const [data, setData] = useState([0, 1, 2, 3, 4, 5]);

  return (
    // Wrap the root of each screen with FibreProvider to allow for context
    //  to be shared between Skia components that are rendered on the screen
    // Provider is for Redux state and FibreProvider is for Skia context sharing
    <Provider store={appStore}>
      <FiberProvider>
        <ParallaxScrollCard
          headerBackgroundColor={{}}
          headerBackground={<SkiaGradientRenderer />}>
          <Card style={supportScreenStyles.titleContainer}>
            <TextCard type="title">Support</TextCard>
          </Card>
          <TextCard>
            This app includes example code to help you get started.
          </TextCard>
        </ParallaxScrollCard>
      </FiberProvider>
    </Provider>
  );
}
