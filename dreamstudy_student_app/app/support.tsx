import { Card } from '@/components/ui/react/cards/card';
import ParallaxScrollCard from '@/components/ui/react/cards/parallaxScrollCard';
import { TextCard } from '@/components/ui/react/cards/textCard';
import { supportScreenStyles } from '@/utils/appStyles';
import { Image } from 'expo-image';

export default function SupportScreen() {
  return (
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
  );
}
