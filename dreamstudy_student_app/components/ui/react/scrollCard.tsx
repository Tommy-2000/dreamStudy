import type { PropsWithChildren } from 'react';
import Animated, {
    useAnimatedRef,
    useScrollOffset
} from 'react-native-reanimated';
import { useUnistyles } from 'react-native-unistyles';

import { cardStyles } from '@/utils/appStyles';
import { Card } from './card';

type ScrollCardProps = PropsWithChildren;

export default function ScrollCard({ children }: ScrollCardProps) {
  const { theme } = useUnistyles();
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollOffset(scrollRef);

  return (
    <Animated.ScrollView
      ref={scrollRef}
      scrollViewOffset={scrollOffset}
      style={{ flex: 1 }}
      scrollEventThrottle={16}>
      <Card style={cardStyles.parallaxScrollCard}>{children}</Card>
    </Animated.ScrollView>
  );
}
