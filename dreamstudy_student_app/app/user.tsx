import { Student } from '@/api/models';
import ParallaxScrollCard from '@/components/parallaxScrollCard';
import ScrollCard from '@/components/scrollCard';
import { SkiaGradientContainer } from '@/components/skiaGradientContainer';
import SortableGridCard from '@/components/sortableGridCard';
import { TextCard } from '@/components/textCard';
import { StudentUserCard } from '@/components/user/studentUserCard';
import { studentMockData } from '@/utils/appMockData';
import { FiberProvider } from 'its-fine';
import { useCallback } from 'react';
import Sortable, { SortableGridRenderItem } from 'react-native-sortables';

export default function UserScreen() {
  // Render each item as a SortableGridRenderItem
  const renderGridItem = useCallback<SortableGridRenderItem<Student>>(
    ({ item, index }) => <StudentUserCard data={item} onPress={() => {}} />,
    []
  );

  return (
    // Wrap the root of each screen with FibreProvider to allow for context
    //  to be shared between Skia components that are rendered on the screen
    <FiberProvider>
      <ParallaxScrollCard
        headerBackgroundColor={{}}
        headerBackground={<SkiaGradientContainer />}>
        <TextCard type="title">User</TextCard>
        <TextCard>
          This app includes example code to help you get started.
        </TextCard>
        <Sortable.PortalProvider enabled={true}>
          <ScrollCard>
            <SortableGridCard
              data={studentMockData}
              renderItem={renderGridItem}
              keyExtractor={item => item.id}
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
