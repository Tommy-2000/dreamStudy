import { useNoteUIContext } from '@/hooks/react/useNoteUIContext';
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
      switch (noteUIContext.noteUIState.noteUIMenu) {
        case 'drawing':
        case 'colors': {
          // Obtain the color, size and pathType to create a drawing
          const {
            skColor,
            skSize,
            skPathType: pathType
          } = skiaDrawContext.drawState;
          skiaDrawContext.drawCommands.addSkiaObject(
            createSkiaPath(e.x, e.y, skColor, skSize, pathType)
          );
          break;
        }
        case 'selection': {
          // The X and Y of the gesture are made into a SkiaPoint
          // Get the closest drawObject from the SkiaPoint
          const skiaDrawObject = findClosestDrawObjectToPoint(
            Skia.Point(e.x, e.y),
            skiaDrawContext.drawState.skObjects
          );

          if (
            skiaDrawObject &&
            skiaDrawContext.drawState.skObjects.length === 0
          ) {
            // Add the SkiaDrawObject to the array with the draw command
            skiaDrawContext.drawCommands.setSelectedSkiaObjects(skiaDrawObject);
            skiaDrawContext.drawCommands.setSelectionRect(undefined);
            break;
          }

          // Get the bounding box of all selected SkiaDrawObjects
          const skiaBoundingBox = getBoundingBox(
            skiaDrawContext.drawState.selectedSkObjects
          );
          if (
            skiaBoundingBox &&
            findPointInSkiaRect(Skia.Point(e.x, e.y), skiaBoundingBox)
          ) {
            skiaDrawContext.drawCommands.setResizeMode(
              findResizeMode(
                Skia.Point(e.x, e.y),
                skiaDrawContext.drawState.selectedSkObjects
              )
            );
          } else {
            // If the SkiaDrawObject is not null, add it to the selected skiaDrawObjects
            if (skiaDrawObject) {
              skiaDrawContext.drawCommands.setSelectedSkiaObjects(
                skiaDrawObject
              );
            } else {
              skiaDrawContext.drawCommands.setSelectedSkiaObjects();
              // The X and Y of the gesture are passed to a new SkiaRect object
              skiaDrawContext.drawCommands.setSelectionRect(
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
      switch (noteUIContext.noteUIState.noteUIMenu) {
        case undefined:
        case 'drawing':
        case 'colors': {
          const skiaDrawObject =
            skiaDrawContext.drawState.skObjects[
              skiaDrawContext.drawState.skObjects.length - 1
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
          if (skiaDrawContext.drawState.selectedSkObjects.length > 0) {
            resizeSkiaObjectsBy(
              e.x,
              e.y,
              skiaDrawContext.drawState.skResizeMode,
              skiaDrawContext.drawState.selectedSkObjects
            );
          } else {
            if (skiaDrawContext.drawState.currentSelectionSkRect) {
              skiaDrawContext.drawCommands.setSelectionRect(
                Skia.XYWHRect(
                  skiaDrawContext.drawState.currentSelectionSkRect.x,
                  skiaDrawContext.drawState.currentSelectionSkRect.y,
                  e.x - skiaDrawContext.drawState.currentSelectionSkRect.x,
                  e.y - skiaDrawContext.drawState.currentSelectionSkRect.y
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
      switch (noteUIContext.noteUIState.noteUIMenu) {
        case 'selection': {
          if (skiaDrawContext.drawState.currentSelectionSkRect) {
            // Find skiaObjects within the bounds of the skiaRect
            const skiaObjectsInRect = findSkiaObjectsInRect(
              skiaDrawContext.drawState.currentSelectionSkRect,
              skiaDrawContext.drawState.skObjects
            );
            // If there are skiaObjects in the rect, set them as selectedSkiaObjects
            if (skiaObjectsInRect) {
              skiaDrawContext.drawCommands.setSelectedSkiaObjects(
                ...skiaObjectsInRect
              );
            }
            // Otherwise, the selection rect is undefined
            skiaDrawContext.drawCommands.setSelectionRect(undefined);
          }
          break;
        }
        default:
          break;
      }
    });
}
