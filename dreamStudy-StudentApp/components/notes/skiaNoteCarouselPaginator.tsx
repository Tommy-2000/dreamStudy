import { memo, ReactNode, useMemo } from 'react';
import { SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { AnimatedCard } from '../animatedCard';

export interface SkiaCarouselPaginatorProps {
  currentIndex: SharedValue<number>;
  numberOfPages: number;
  indicators: number;
  indicatorSize?: number;
  spacing?: number;
  background?: ReactNode;
}

export const carouselSpringAnimConfig = {
  springDamping: 15,
  springStiffness: 100,
  springMass: 0.5
} as const;

export const carouselDecayAnimConfig = {} as const;

const SkiaCarouselPaginator = ({
  currentIndex,
  numberOfPages,
  indicators,
  indicatorSize = 10,
  spacing = 8
}: SkiaCarouselPaginatorProps) => {
  const carouselIndicators = useMemo(
    () => new Array(numberOfPages).fill(0),
    [numberOfPages]
  );

  const 

  const carouselContainerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: []
    };
  });

  return (
    <AnimatedCard animatedStyle={carouselContainerAnimatedStyle}>
      {carouselIndicators.map()}
    </AnimatedCard>
  );
};

export default memo(SkiaCarouselPaginator);
