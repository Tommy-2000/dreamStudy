import type { PropsWithChildren, ReactNode } from 'react';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollOffset
} from 'react-native-reanimated';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

import { reactValues } from '@/utils/appConstants';
import { cardStyles } from '@/utils/appStyles';
import { StyleProp, ViewProps } from 'react-native';
import { AnimatedCard } from './animatedCard';
import { Card } from './card';

type ParallaxScrollCardProps = {
  headerBackgroundColor: StyleProp<ViewProps>;
} & PropsWithChildren<{
  headerBackground: ReactNode;
}>;

export default function ParallaxScrollCard({
  children,
  headerBackground
}: ParallaxScrollCardProps) {
  const { theme } = useUnistyles();
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollOffset(scrollRef);
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [
              -reactValues.parallaxHeaderHeight,
              0,
              reactValues.parallaxHeaderHeight
            ],
            [
              -reactValues.parallaxHeaderHeight / 2,
              0,
              reactValues.parallaxHeaderHeight * 0.75
            ]
          )
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [
              -reactValues.parallaxHeaderHeight,
              0,
              reactValues.parallaxHeaderHeight
            ],
            [2, 1, 1]
          )
        }
      ]
    };
  });

  return (
    <Animated.ScrollView
      ref={scrollRef}
      style={cardStyles.parallaxScrollCardHeader}
      scrollEventThrottle={50}>
      <AnimatedCard
        animatedStyle={[parallaxScroll.parallaxHeader, headerAnimatedStyle]}>
        {headerBackground}
      </AnimatedCard>
      <Card style={cardStyles.parallaxScrollCardBody}>{children}</Card>
    </Animated.ScrollView>
  );
}

const parallaxScroll = StyleSheet.create(theme => ({
  parallaxHeader: {}
}));
