import { Card } from '@/components/ui/react/card';
import { IconSymbol } from '@/components/ui/react/iconSymbol';
import ParallaxScrollCard from '@/components/ui/react/parallaxScrollCard';
import { TextCard } from '@/components/ui/react/textCard';
import { revisionScreenStyles } from '@/utils/appStyles';
import { FiberProvider } from 'its-fine';

export default function RevisionScreen() {
  return (
    // Wrap the root of each screen with FibreProviderto allow for context
    //  to be shared between Skia components that are rendered on the screen
    <FiberProvider>
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
          <TextCard type="title">Revision</TextCard>
        </Card>

        <TextCard>This app includes a draggable grid.</TextCard>
        {/* <GridCard data={revisionMockData} /> */}
      </ParallaxScrollCard>
    </FiberProvider>
  );
}
