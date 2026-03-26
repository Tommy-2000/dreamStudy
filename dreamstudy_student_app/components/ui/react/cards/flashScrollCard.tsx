import { cardStyles } from '@/unistyles';
import { FlashList } from '@shopify/flash-list';
import { StyleProp, ViewProps } from 'react-native';
import { Card } from './card';
import { TextCard } from './textCard';

export type FlashListProps = {
  data: readonly string[] | null | undefined;
  numColumns: number;
  contentContainerStyle?: StyleProp<ViewProps>;
  initialScrollIndex: number;
};

export default function FlashScrollCard({
  data,
  numColumns,
  contentContainerStyle,
  initialScrollIndex
}: FlashListProps) {
  return (
    <Card style={cardStyles.flashScroll}>
      <FlashList
        data={data}
        numColumns={numColumns}
        contentContainerStyle={contentContainerStyle}
        initialScrollIndex={initialScrollIndex}
        renderItem={({ item }) => <TextCard>{item}</TextCard>}
      />
    </Card>
  );
}
