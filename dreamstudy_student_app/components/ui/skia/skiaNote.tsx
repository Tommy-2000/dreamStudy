import useHeaderHeight from '@/hooks/react/useHeaderHeight';
import { PressableScale } from 'pressto';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { TextInput, useWindowDimensions } from 'react-native';
import { Gesture } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  withDecay,
  withSpring
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SkiaGestureCard } from './skiaGestureCard';

const SkiaNoteTextInput = Animated.createAnimatedComponent(TextInput);

export type SkiaNoteInputRefType = {
  blur: () => void;
  focus: () => void;
};

export const SkiaNote = forwardRef<SkiaNoteInputRefType, {}>(
  (skiaNoteProps, skiaNoteForwardRef) => {
    const { width, height } = useWindowDimensions();
    const noteLeftBoundary = 0;
    const noteRightBoundary = width;
    const { top: safeAreaTop, bottom: safeAreaBottom } = useSafeAreaInsets();
    const animationProgress = useSharedValue(0);
    // Whenever refs change, it doesn't re-render the component
    const skiaNoteAnimatedTextInput = useRef<TextInput>(null);

    useImperativeHandle(skiaNoteForwardRef, () => ({
      blur: () => {
        skiaNoteAnimatedTextInput.current?.blur; // Remove focus from the text input through refs
      },
      focus: () => {
        skiaNoteAnimatedTextInput.current?.focus; // Focus on the text input through refs
      }
    }));

    const headerHeight = useHeaderHeight();

    const inputAnimationRange = [0, 1];

    const initialNoteHeight = height / 2.5;

    const expandedNoteHeight = height;

    const initialNoteWidth = initialNoteHeight * (3 / 4);

    const expandedNoteWidth = width - 2;

    const initialNoteRotation = -4;

    const expandedNoteRotation = 0;

    const initialNoteTop = (height - initialNoteHeight) / 2 + 40;

    const expandedNoteTop = safeAreaTop + headerHeight;

    const initialNoteLeft = (width - initialNoteWidth) / 2;

    const expandedNoteLeft = 1;

    const initialNoteBorderRadius = 16;

    const expandedNoteBorderRadius = 32;

    // const skiaNoteAnimatedStyle = useAnimatedStyle(() => {
    //   const topInterpolation = interpolate(
    //     animationProgress.value,
    //     inputAnimationRange,
    //     [initialNoteTop, expandedNoteTop]
    //   );

    //   const leftInterpolation = interpolate(
    //     animationProgress.value,
    //     inputAnimationRange,
    //     [initialNoteLeft, expandedNoteLeft]
    //   );
    // });

    // The translate values are used for the pan gesture while the pitch scale is used for pitch gestures
    const translateChangeX = useSharedValue(0);
    const translateChangeY = useSharedValue(1);
    // The scale factor starts at 1 and increases by this amount when responding to pitch gestures
    const pitchScale = useSharedValue(1);

    const panGesture = Gesture.Pan()
      .averageTouches(true) // This only works with Android when getting the average position
      .maxPointers(5)
      .onChange(gesture => {
        translateChangeX.value += gesture.changeX;
      })
      .onEnd(gesture => {
        translateChangeX.value = withDecay({
          velocity: gesture.velocityX,
          clamp: [noteLeftBoundary, noteRightBoundary]
        });
      })
      .minDistance(1);

    const pinchGesture = Gesture.Pinch().onUpdate(pinch => {});

    return (
      <>
        <PressableScale onPress={() => {}}>
          <SkiaGestureCard gesture={panGesture}>
            <SkiaNoteTextInput
              ref={skiaNoteAnimatedTextInput}
              onFocus={() => {
                animationProgress.value = withSpring(1, {
                  duration: 800,
                  dampingRatio: 1
                });
              }}
              onBlur={() => {
                animationProgress.value = withSpring(0, {
                  duration: 800,
                  dampingRatio: 1
                });
              }}
            />
          </SkiaGestureCard>
        </PressableScale>
      </>
    );
  }
);
