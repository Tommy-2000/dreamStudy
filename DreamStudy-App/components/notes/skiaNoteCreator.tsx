import { useSkiaDrawContext } from '@/hooks/skia/useSkiaDrawContext';
import getSkiaBounds from '@/utils/functions/skia/getSkiaBounds';
import { SkiaObject, SkObjects } from '@/utils/types/skia/skiaDrawProps';
import {
  CanvasProps,
  DashPathEffect,
  DiscretePathEffect,
  Fill,
  Group,
  Image,
  Paint,
  Path,
  Rect,
  Skia,
  SkRect,
  useCanvasRef
} from '@shopify/react-native-skia';
import React, { useEffect, useMemo, useState } from 'react';
import { Gesture } from 'react-native-gesture-handler';

import { Card } from '@/components/card';
import { SkiaGestureCanvas } from '@/components/skia/skiaGestureCanvas';
import { SkiaSelectionFrame } from './skiaSelectionFrame';
import { NoteToolbarCard } from './toolbar/noteToolbarCard';

export default function SkiaNoteCreator({ style }: CanvasProps) {
  // Create debug state values for tracking gestures
  const [gestureBegin, setGestureBegin] = useState<undefined | string>();
  const [gestureUpdate, setGestureUpdate] = useState<undefined | string>();
  const [gestureEnd, setGestureEnd] = useState<undefined | string>();

  const skiaDrawContext = useSkiaDrawContext();

  // Get the RefObject containing the ref to the Skia Canvas
  const canvasRef = useCanvasRef();

  const [skiaObjects, setSkiaObjects] = useState(
    skiaDrawContext.state.skObjects
  );
  const [selectedSkiaObjects, setSelectedSkiaObjects] = useState<SkObjects>();
  const [skiaBackgroundColor, setBackgroundColor] = useState(
    skiaDrawContext.state.skBackgroundColor
  );
  const [selectionSkiaRect, setSelectionSkiaRect] = useState<SkRect>();

  const panGesture = Gesture.Pan()
    .averageTouches(true) // This only works with Android when getting the average position
    .maxPointers(5)
    .onStart(gesture => {
      // Set debug values to determine gesture position
      setGestureBegin(`${Math.round(gesture.x)}, ${Math.round(gesture.y)}`);
    })
    .onChange(gesture => {
      // Set debug values to determine gesture position
      setGestureUpdate(`${Math.round(gesture.x)}, ${Math.round(gesture.y)}`);
    })
    .onFinalize(gesture => {
      // Set debug values to determine gesture position
      setGestureEnd(`${Math.round(gesture.x)}, ${Math.round(gesture.y)}}`);
    })
    .minDistance(1);

  // const checkedSkiaRef = checkSkiaRef(skiaRef);

  useEffect(() => {
    const cancelSkiaDraw = skiaDrawContext.addDrawListener(currentSkiaState => {
      setSkiaObjects([...currentSkiaState.skObjects]);
      setSelectedSkiaObjects([...currentSkiaState.selectedSkObjects]);
      setSelectionSkiaRect(currentSkiaState.currentSelectionSkRect);
      setBackgroundColor(currentSkiaState.skBackgroundColor);
    });
    return () => {
      cancelSkiaDraw();
    };
  }, [skiaDrawContext, canvasRef]);

  // When SkiaObjects are rendered into SkiaComponents, memoise the component as it renders
  const renderSkiaComponents = useMemo(
    () =>
      skiaObjects.map((skiaObject: SkiaObject, objectIndex) => {
        // Check the type props for the SkiaObject and return the correct SkiaComponent based on its type
        switch (skiaObject.skiaPropType) {
          case 'image':
            return (
              <Image
                fit="fill"
                key={objectIndex}
                image={skiaObject.image}
                rect={getSkiaBounds(skiaObject)}
              />
            );
          default:
            switch (skiaObject.pathPropType) {
              case 'discreted':
                return (
                  <Group key={objectIndex}>
                    <Paint style="stroke" strokeWidth={4}>
                      <DiscretePathEffect length={3} deviation={5} />
                    </Paint>
                    <Path
                      path={skiaObject.path}
                      color={skiaObject.color}
                      style="stroke"
                      strokeWidth={skiaObject.size.width}
                      strokeCap="round"
                    />
                  </Group>
                );
              case 'dashed':
                return (
                  <Group key={objectIndex}>
                    <Paint style="stroke" strokeWidth={4}>
                      <DashPathEffect
                        intervals={[
                          skiaObject.size.height * 2,
                          skiaObject.size.width * 2
                        ]}
                      />
                    </Paint>
                    <Path
                      path={skiaObject.path}
                      color={skiaObject.color}
                      style="stroke"
                      strokeWidth={skiaObject.size.width}
                      strokeCap="round"
                    />
                  </Group>
                );
              default:
                return (
                  <Path
                    path={skiaObject.path}
                    color={skiaObject.color}
                    style="stroke"
                    strokeWidth={skiaObject.size.width}
                    strokeCap="round"
                  />
                );
            }
        }
      }),
    [skiaObjects]
  );
  return (
    <Card>
      <SkiaGestureCanvas
        ref={canvasRef}
        style={style}
        gesture={panGesture}
        userSelect="auto"
        enableContextMenu={true}
        touchAction="auto">
        <Fill color={skiaDrawContext.state.skBackgroundColor} />
        {renderSkiaComponents}
        {selectedSkiaObjects ? (
          <SkiaSelectionFrame selectedSkiaObjects={selectedSkiaObjects} />
        ) : null}
        {selectionSkiaRect ? (
          <Group>
            <Paint style="stroke" strokeWidth={2} color="rgba(0, 0, 0, 1)">
              <DashPathEffect intervals={[4, 4]} />
            </Paint>
            <Rect
              color={
                skiaBackgroundColor === Skia.Color('#000000')
                  ? Skia.Color('#FFFFFF')
                  : Skia.Color('#000000')
              }
              x={selectionSkiaRect.x}
              y={selectionSkiaRect.y}
              width={selectionSkiaRect.width}
              height={selectionSkiaRect.height}
            />
          </Group>
        ) : null}
      </SkiaGestureCanvas>
      <NoteToolbarCard canvasRefObject={canvasRef} canvasStyle={style} />
    </Card>
  );
}
// function checkSkiaRef(
//   skiaRef: React.Ref<CanvasRef> | null
// ): React.Ref<CanvasRef> {
//   if (skiaRef === null) {
//     throw Error('Skia CanvasRef must not be null, please try again');
//   } else {
//     return skiaRef;
//   }
// }
