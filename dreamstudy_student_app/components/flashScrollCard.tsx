import { cardStyles } from '@/utils/appStyles';
import { FlashList, FlashListProps, FlashListRef } from '@shopify/flash-list';
import { useRef } from 'react';
import { Card } from './card';

export default function FlashScrollCard({
  data,
  numColumns,
  contentContainerStyle,
  initialScrollIndex,
  renderItem
}: FlashListProps<any>) {
  const flashListRef = useRef<FlashListRef<any> | null>(null);

  return (
    <Card style={cardStyles.flashScrollCard}>
      <FlashList
        ref={flashListRef}
        data={data}
        numColumns={numColumns}
        contentContainerStyle={contentContainerStyle}
        initialScrollIndex={initialScrollIndex}
        renderItem={renderItem}
      />
    </Card>
  );
}
