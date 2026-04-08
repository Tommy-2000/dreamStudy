import { useEffect } from 'react';
import Animated, { useSharedValue } from 'react-native-reanimated';
import { Card } from '../card';

export const NotePreviewCard = ({ item }: { item: { id: number } }) => {
  const animatedValue = useSharedValue(0);
  useEffect(() => {
    animatedValue.value = 0;
  }, [item.id, animatedValue]);

  return (
    <Animated.View>
      <Card style={{ height: 400, width: 200, backgroundColor: 'blue' }} />
    </Animated.View>
  );
};
