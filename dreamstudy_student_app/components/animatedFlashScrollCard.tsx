import { cardStyles } from '@/utils/appStyles';
import {
    AnimatedFlashList,
    FlashListProps
} from '@shopify/flash-list';
import { Card } from './card';

export default function AnimatedFlashScrollCard({
  data,
  numColumns,
  contentContainerStyle,
  initialScrollIndex,
  renderItem
}: FlashListProps<any>) {
  return (
    <Card style={cardStyles.flashScrollCard}>
      <AnimatedFlashList
        data={data}
        numColumns={numColumns}
        contentContainerStyle={contentContainerStyle}
        initialScrollIndex={initialScrollIndex}
        renderItem={renderItem}
      />
    </Card>
  );
}
