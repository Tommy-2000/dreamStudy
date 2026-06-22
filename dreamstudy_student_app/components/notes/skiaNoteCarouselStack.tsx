import * as Haptics from 'expo-haptics';
import { StyleProp, useWindowDimensions, ViewStyle } from 'react-native';
import {
  useAnimatedReaction,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue
} from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';
import AnimatedFlashScrollCard from '../animatedFlashScrollCard';
import { Card } from '../card';
import { SkiaCarouselPreview } from './skiaCarouselPreview';

export interface SkiaNoteCarouselStackProps<T = unknown> {
  noteStyle?: StyleProp<ViewStyle>;
  noteData: T[];
  renderNote: (item: T, index: number) => React.ReactNode;
  noteWidth?: number;
  noteHeight?: number;
  noteStackOffset?: number;
  showPaginator?: boolean;
  paginatorDots?: number;
  paginatorDotSize?: number;
  paginatorSpacing?: number;
  paginatorBackground?: React.ReactNode;
}

export function SkiaNoteCarouselStack<T>({
  noteStyle,
  noteData,
  renderNote,
  noteWidth = 200,
  noteHeight = 180,
  noteStackOffset = 8,
  showPaginator = true,
  paginatorDots = 5,
  paginatorDotSize = 10,
  paginatorSpacing = 10
}: SkiaNoteCarouselStackProps<T>) {
  const { width: screenWidth } = useWindowDimensions();

  const carouselScrollX = useSharedValue(0);

  const animatedScrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      // Update the sharedValue with the X of the contentOffset
      carouselScrollX.value = event.contentOffset.x;
    }
  });

  const currentNoteIndex = useDerivedValue(() => {
    return carouselScrollX.value / noteWidth;
  });

  // Listen to changes to the sharedValue and respond accordingly
  useAnimatedReaction(
    () => Math.round(currentNoteIndex.value),
    (prep, prev) => {
      if (prep !== prev && prev !== null) {
        // Call haptics on the RN runtime when the animation on the UI runtime has finished
        scheduleOnRN(Haptics.selectionAsync);
      }
    }
  );

  return (
    <Card>
      {/* Map notes to the preview components and render each note as children */}
      {noteData.map((item, index) => (
        <SkiaCarouselPreview
          cardIndex={index}
          cardScrollX={carouselScrollX}
          cardHeight={noteHeight}
          cardWidth={noteWidth}
          totalNumOfCards={noteData.length}>
          {renderNote(item, index)}
        </SkiaCarouselPreview>
      ))}

      <AnimatedFlashScrollCard
        data={noteData}
        renderItem={() => (
          <Card style={{ height: noteHeight, width: noteWidth }} />
        )}
        snapToInterval={noteWidth}
        horizontal
        disableIntervalMomentum
        showsHorizontalScrollIndicator={false}
        onScroll={animatedScrollHandler}
        scrollEventThrottle={16}
        decelerationRate="fast"
        style={{
          position: 'absolute',
          width: screenWidth,
          height: noteWidth + noteStackOffset * 6,
          zIndex: 1000
        }}
        contentContainerStyle={{
          paddingLeft: (screenWidth - noteWidth) / 2,
          paddingTop: noteStackOffset * 3
        }} // Change padding according to the note width and scale accordingly
      />
    </Card>
  );
}
