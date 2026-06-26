import type { PropsWithChildren } from 'react';
import Animated, { AnimatedScrollViewProps } from 'react-native-reanimated';

import { cardStyles } from '@/utils/appStyles';
import { Card } from './card';

type ScrollCardProps = PropsWithChildren & AnimatedScrollViewProps;

export default function ScrollCard({
  children,
  ref,
  scrollViewOffset
}: ScrollCardProps) {
  return (
    <Card style={cardStyles.parallaxScrollCardBody}>
      <Animated.ScrollView
        ref={ref}
        scrollViewOffset={scrollViewOffset}
        style={{ flex: 1 }}
        scrollEventThrottle={16}>
        {children}
      </Animated.ScrollView>
    </Card>
  );
}
