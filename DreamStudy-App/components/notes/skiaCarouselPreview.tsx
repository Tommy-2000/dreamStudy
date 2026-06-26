import { Card } from '@/components/card';
import { PropsWithChildren } from 'react';
import {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle
} from 'react-native-reanimated';
import { AnimatedCard } from '../animatedCard';

export interface SkiaCarouselPreviewProps extends PropsWithChildren {
  cardIndex: number;
  cardScrollX: SharedValue<number>;
  cardHeight: number;
  cardWidth: number;
  totalNumOfCards: number;
}

export const SkiaCarouselPreview = ({
  cardIndex,
  cardScrollX,
  cardHeight,
  cardWidth,
  totalNumOfCards,
  children
}: SkiaCarouselPreviewProps) => {
  const extendedInputRange = [
    (cardIndex - 2) * cardWidth,
    (cardIndex - 1) * cardWidth,
    cardIndex * cardWidth,
    (cardIndex + 1) * cardWidth,
    (cardIndex + 2) * cardWidth
  ];

  const skiaNoteAnimatedStyle = useAnimatedStyle(() => {
    const animatedScale = interpolate(
      cardScrollX.value,
      extendedInputRange,
      [0.7, 0.8, 1, 1.5, 1.5], // Change the values where necessary
      Extrapolation.CLAMP // Clamp the scaled value
    );

    const animatedTranslateY = interpolate(
      cardScrollX.value,
      extendedInputRange,
      [65, 35, 0, -100, -100], // Change the values where necessary
      Extrapolation.CLAMP // Clamp the scaled value
    );

    const animatedOpacity = interpolate(
      cardScrollX.value,
      extendedInputRange,
      [0.2, 0.8, 1, -1, -2], // Change the values where necessary
      Extrapolation.CLAMP // Clamp the scaled value
    );

    return {
      transform: [{ translateY: animatedTranslateY }, { scale: animatedScale }],
      opacity: animatedOpacity
    };
  });

  const skiaNoteRotationStyle = useAnimatedStyle(() => {
    const animatedRotateX = interpolate(
      cardScrollX.value,
      extendedInputRange,
      [45, 30, 0, 0, 0],
      Extrapolation.CLAMP
    );

    return {
      transform: [
        { perspective: 100 },
        { rotateX: `${Math.floor(animatedRotateX)}deg` }
      ]
    };
  });

  return (
    <AnimatedCard animatedStyle={[{}, skiaNoteAnimatedStyle]}>
      <AnimatedCard animatedStyle={[{ flex: 1 }, skiaNoteRotationStyle]}>
        <Card
          style={{ height: 400, width: 200, backgroundColor: 'blue' }}
          collapsable={false} // This Card should stay active
        >
          {children}
        </Card>
      </AnimatedCard>
    </AnimatedCard>
  );
};
