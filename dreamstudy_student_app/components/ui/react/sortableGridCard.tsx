import React, { useCallback } from 'react';
import { Text } from 'react-native';
import type { SortableGridRenderItem } from 'react-native-sortables';
import Sortable from 'react-native-sortables';
import { Card } from './card';

const DUMMY_DATA = Array.from(
  { length: 12 },
  (_, index) => `Item ${index + 1}`
);

export default function SortableGridCard() {
  // Render each item as a SortableGridRenderItem
  const renderGridItem = useCallback<SortableGridRenderItem<string>>(
    ({ item }) => (
      <Card>
        <Text>{item}</Text>
      </Card>
    ),
    []
  );

  return (
    <Card>
      <Sortable.Grid
        columns={4}
        data={DUMMY_DATA}
        renderItem={renderGridItem}
        rowGap={20}
        columnGap={20}
      />
    </Card>
  );
}
