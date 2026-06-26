import { useNoteUIContext } from '@/hooks/useNoteUIContext';
import createSkiaPath from '@/utils/functions/skia/createSkiaPath';
import findClosestDrawObjectToPoint from '@/utils/functions/skia/findClosestSkiaObjectToPoint';
import findSkiaObjectsInRect from '@/utils/functions/skia/findSkiaObjectsInRect';
import { findResizeMode } from '@/utils/functions/skia/findSkiaResizeMode';
import { getBoundingBox } from '@/utils/functions/skia/getSkiaBoundingBox';
import { resizeElementsBy as resizeSkiaObjectsBy } from '@/utils/functions/skia/resizeSkiaObjects';
import { Skia, type SkPoint } from '@shopify/react-native-skia';
import { useRef } from 'react';
import { Gesture } from 'react-native-gesture-handler';
import { useSkiaDrawContext } from '../../../hooks/skia/useSkiaDrawContext';
import { findPointInSkiaRect } from './findPointInSkiaRect';

export default function skiaDrawGesture() {
  const skiaPrevPointRef = useRef<SkPoint>(Skia.Point(0, 0));

  const skiaDrawContext = useSkiaDrawContext();

  const noteUIContext = useNoteUIContext();

  return Gesture.Pan()
    .onStart(e => {
      switch (noteUIContext.state.noteMenu) {
        case 'drawing':
        case 'colors': {
          // Obtain the color, size and pathType to create a drawing
          const {
            skColor,
            skSize,
            skPathPropType: pathType
          } = skiaDrawContext.state;
          skiaDrawContext.commands.addSkiaObject(
            createSkiaPath(e.x, e.y, skColor, skSize, pathType)
          );
          break;
        }
        case 'selection': {
          // The X and Y of the gesture are made into a SkiaPoint
          // Get the closest drawObject from the SkiaPoint
          const skiaDrawObject = findClosestDrawObjectToPoint(
            Skia.Point(e.x, e.y),
            skiaDrawContext.state.skObjects
          );

          if (skiaDrawObject && skiaDrawContext.state.skObjects.length === 0) {
            // Add the SkiaDrawObject to the array with the draw command
            skiaDrawContext.commands.setSelectedSkiaObjects(skiaDrawObject);
            skiaDrawContext.commands.setSelectionRect(undefined);
            break;
          }

          // Get the bounding box of all selected SkiaDrawObjects
          const skiaBoundingBox = getBoundingBox(
            skiaDrawContext.state.selectedSkObjects
          );
          if (
            skiaBoundingBox &&
            findPointInSkiaRect(Skia.Point(e.x, e.y), skiaBoundingBox)
          ) {
            skiaDrawContext.commands.setResizeMode(
              findResizeMode(
                Skia.Point(e.x, e.y),
                skiaDrawContext.state.selectedSkObjects
              )
            );
          } else {
            // If the SkiaDrawObject is not null, add it to the selected skiaDrawObjects
            if (skiaDrawObject) {
              skiaDrawContext.commands.setSelectedSkiaObjects(skiaDrawObject);
            } else {
              skiaDrawContext.commands.setSelectedSkiaObjects();
              // The X and Y of the gesture are passed to a new SkiaRect object
              skiaDrawContext.commands.setSelectionRect(
                Skia.XYWHRect(e.x, e.y, 0, 0)
              );
            }
          }
          break;
        }
        default:
          break;
      }
      // Set the x and y of the gesture to a ref of the SkiaPoint as its current value
      skiaPrevPointRef.current = Skia.Point(e.x, e.y);
    })
    .onChange(e => {
      switch (noteUIContext.state.noteMenu) {
        case undefined:
        case 'drawing':
        case 'colors': {
          const skiaDrawObject =
            skiaDrawContext.state.skObjects[
              skiaDrawContext.state.skObjects.length - 1
            ];
          const xQuad = (skiaPrevPointRef.current.x + e.x) / 2;
          const yQuad = (skiaPrevPointRef.current.y + e.y) / 2;
          skiaDrawObject.path.quadTo(
            e.x - skiaPrevPointRef.current.x,
            e.y - skiaPrevPointRef.current.y,
            xQuad,
            yQuad
          );
          break;
        }
        case 'selection': {
          if (skiaDrawContext.state.selectedSkObjects.length > 0) {
            resizeSkiaObjectsBy(
              e.x,
              e.y,
              skiaDrawContext.state.skResizeMode,
              skiaDrawContext.state.selectedSkObjects
            );
          } else {
            if (skiaDrawContext.state.currentSelectionSkRect) {
              skiaDrawContext.commands.setSelectionRect(
                Skia.XYWHRect(
                  skiaDrawContext.state.currentSelectionSkRect.x,
                  skiaDrawContext.state.currentSelectionSkRect.y,
                  e.x - skiaDrawContext.state.currentSelectionSkRect.x,
                  e.y - skiaDrawContext.state.currentSelectionSkRect.y
                )
              );
            }
          }
          break;
        }
        default:
          break;
      }
      // Set the x and y of the gesture to a ref of the SkiaPoint as its current value
      skiaPrevPointRef.current = Skia.Point(e.x, e.y);
    })
    .onEnd(e => {
      switch (noteUIContext.state.noteMenu) {
        case 'selection': {
          if (skiaDrawContext.state.currentSelectionSkRect) {
            // Find skiaObjects within the bounds of the skiaRect
            const skiaObjectsInRect = findSkiaObjectsInRect(
              skiaDrawContext.state.currentSelectionSkRect,
              skiaDrawContext.state.skObjects
            );
            // If there are skiaObjects in the rect, set them as selectedSkiaObjects
            if (skiaObjectsInRect) {
              skiaDrawContext.commands.setSelectedSkiaObjects(
                ...skiaObjectsInRect
              );
            }
            // Otherwise, the selection rect is undefined
            skiaDrawContext.commands.setSelectionRect(undefined);
          }
          break;
        }
        default:
          break;
      }
    });
}
