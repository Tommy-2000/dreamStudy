import type { PropsWithChildren, ReactElement } from 'react';
import Animated, {
    interpolate,
    useAnimatedRef,
    useAnimatedStyle,
    useScrollOffset
} from 'react-native-reanimated';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

import { appValues } from '@/utils/appConstants';
import { cardStyles } from '@/utils/appStyles';
import { StyleProp, ViewProps } from 'react-native';
import { Card } from '../card';

type ParallaxScrollCardProps = {
  headerBackgroundColor: StyleProp<ViewProps>;
} & PropsWithChildren<{
  headerImage: ReactElement;
}>;

export default function ParallaxScrollCard({
  children,
  headerImage
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
              -appValues.parallaxHeaderHeight,
              0,
              appValues.parallaxHeaderHeight
            ],
            [
              -appValues.parallaxHeaderHeight / 2,
              0,
              appValues.parallaxHeaderHeight * 0.75
            ]
          )
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [
              -appValues.parallaxHeaderHeight,
              0,
              appValues.parallaxHeaderHeight
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
      style={{ flex: 1 }}
      scrollEventThrottle={16}>
      <Animated.View
        style={[parallaxScroll.parallaxHeader, headerAnimatedStyle]}>
        {headerImage}
      </Animated.View>
      <Card style={cardStyles.parallaxScrollContent}>{children}</Card>
    </Animated.ScrollView>
  );
}

const parallaxScroll = StyleSheet.create(theme => ({
  parallaxHeader: {}
}));
