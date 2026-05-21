import { Card } from '@/components/ui/react/card';
import ParallaxScrollCard from '@/components/ui/react/parallaxScrollCard';
import { TextCard } from '@/components/ui/react/textCard';
import { supportScreenStyles } from '@/utils/appStyles';
import { Image } from 'expo-image';
import { FiberProvider } from 'its-fine';

export default function SupportScreen() {
  return (
    // Wrap the root of each screen with FibreProviderto allow for context
    //  to be shared between Skia components that are rendered on the screen
    <FiberProvider>
      <ParallaxScrollCard
        headerBackgroundColor={{}}
        headerImage={
          <Image
            source={require('@/assets/images/partial-react-logo.png')}
            style={supportScreenStyles.reactLogo}
          />
        }>
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
