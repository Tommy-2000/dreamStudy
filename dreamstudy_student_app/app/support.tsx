import { Card } from '@/components/ui/react/cards/card';
import GridCard from '@/components/ui/react/cards/grid_card';
import ParallaxScrollCard from '@/components/ui/react/cards/parallax_scroll_card';
import { TextCard } from '@/components/ui/react/cards/text_card';
import { supportScreenStyles } from '@/styles/screen_styles';
import { Image } from 'expo-image';

export default function SupportScreen() {
  return (
    <ParallaxScrollCard
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={supportScreenStyles.reactLogo}
        />
      }>
      <Card style={supportScreenStyles.titleContainer}>
        <TextCard type="title">Support</TextCard>
      </Card>
      <TextCard>This app includes a draggable grid.</TextCard>
      <GridCard />
    </ParallaxScrollCard>
  );
}
