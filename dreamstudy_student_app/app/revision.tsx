import { Card } from '@/components/ui/react/card';
import ParallaxScrollCard from '@/components/ui/react/cards/parallaxScrollCard';
import { TextCard } from '@/components/ui/react/cards/textCard';
import { IconSymbol } from '@/components/ui/react/iconSymbol';
import { revisionScreenStyles } from '@/utils/appStyles';

export default function RevisionScreen() {
  return (
    <ParallaxScrollCard
      headerBackgroundColor={{}}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={revisionScreenStyles.headerImage}
        />
      }>
      <Card style={revisionScreenStyles.titleContainer}>
        <TextCard type="title">Study</TextCard>
      </Card>

      <TextCard>This app includes a draggable grid.</TextCard>
      {/* <GridCard data={revisionMockData} /> */}
    </ParallaxScrollCard>
  );
}
