import { RevisionContent } from '@/api/models';
import { Card } from '@/components/card';
import ParallaxScrollCard from '@/components/parallaxScrollCard';
import ScrollCard from '@/components/scrollCard';
import { SkiaGradientContainer } from '@/components/skiaGradientContainer';
import SortableGridCard from '@/components/sortableGridCard';
import { TextCard } from '@/components/textCard';
import { revisionContentMockData } from '@/utils/appMockData';
import { revisionScreenStyles } from '@/utils/appStyles';
import { router } from 'expo-router';
import { FiberProvider } from 'its-fine';
import { useCallback } from 'react';
import Sortable, { SortableGridRenderItem } from 'react-native-sortables';
import { RevisionCard } from '../components/revision/revisionCard';

export default function RevisionScreen() {
  // Render each item as a SortableGridRenderItem
  const renderGridItem = useCallback<SortableGridRenderItem<RevisionContent>>(
    ({ item, index }) => (
      <RevisionCard
        data={item}
        onPress={() =>
          router.navigate({
            pathname: './revisionSession/[id]',
            params: { id: index }
          })
        }
      />
    ),
    []
  );

  return (
    // Wrap the root of each screen with FibreProviderto allow for context
    //  to be shared between Skia components that are rendered on the screen
    <FiberProvider>
      <ParallaxScrollCard
        headerBackgroundColor={{}}
        headerBackground={<SkiaGradientContainer />}>
        <Card style={revisionScreenStyles.titleContainer}>
          <TextCard type="title">Revision</TextCard>
        </Card>

        <TextCard>This app includes a draggable grid.</TextCard>

        <Card style={revisionScreenStyles.revisionFilterButtons}></Card>
        <Sortable.PortalProvider enabled={true}>
          <ScrollCard>
            <SortableGridCard
              data={revisionContentMockData}
              renderItem={renderGridItem}
              keyExtractor={item => item.contentId}
              columns={4}
              rowGap={2}
              columnGap={2}
            />
          </ScrollCard>
        </Sortable.PortalProvider>
      </ParallaxScrollCard>
    </FiberProvider>
  );
}
