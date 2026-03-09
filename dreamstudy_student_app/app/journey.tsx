import { Card } from '@/components/ui/react/cards/card';
import ParallaxScrollCard from '@/components/ui/react/cards/parallax_scroll_card';
import { TextCard } from '@/components/ui/react/cards/text_card';
import { IconSymbol } from '@/components/ui/react/icon-symbol';
import { journeyScreenStyles } from '@/styles/screen_styles';

export default function JourneyScreen() {
  return (
    <ParallaxScrollCard
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={journeyScreenStyles.headerImage}
        />
      }>
      <Card style={journeyScreenStyles.titleContainer}>
        <TextCard type="title">Journey</TextCard>
      </Card>
      <TextCard>
        This app includes example code to help you get started.
      </TextCard>
    </ParallaxScrollCard>
  );
}
