import React from 'react';
import type {
  DropIndicatorComponentProps,
  SortableGridProps
} from 'react-native-sortables';
import Sortable from 'react-native-sortables';
import { Card } from './card';

export function SortableGridDropIndicator({
  style
}: DropIndicatorComponentProps) {
  return (
    <Card
      style={[style, { borderRadius: '100%', backgroundColor: '#000000' }]}
    />
  );
}

export default function SortableGridCard({
  data,
  renderItem,
  keyExtractor,
  columns,
  rowGap,
  columnGap
}: SortableGridProps<any>) {
  return (
    <Sortable.Grid
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      DropIndicatorComponent={SortableGridDropIndicator}
      dropIndicatorStyle={{ backgroundColor: '#000000' }}
      columns={columns}
      rowGap={rowGap}
      columnGap={columnGap}
    />
  );
}
