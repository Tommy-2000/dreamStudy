import createSkiaPath from '@/utils/functions/skia/createSkiaPath';
import findClosestDrawObjectToPoint from '@/utils/functions/skia/findClosestSkiaObjectToPoint';
import findPointInSkiaRect from '@/utils/functions/skia/findPointInSkiaRect';
import findSkiaObjectsInRect from '@/utils/functions/skia/findSkiaObjectsInRect';
import { findResizeMode } from '@/utils/functions/skia/findSkiaResizeMode';
import { getBoundingBox } from '@/utils/functions/skia/getSkiaBoundingBox';
import { resizeElementsBy as resizeSkiaObjectsBy } from '@/utils/functions/skia/resizeSkiaObjects';
import { Skia, type SkPoint } from '@shopify/react-native-skia';
import { useRef } from 'react';
import { Gesture } from 'react-native-gesture-handler';
import { useRevisionNotepadContext } from '../../../hooks/react/useNotepadContext';
import { useSkiaDrawContext } from '../../../hooks/skia/useSkiaDrawContext';

export default function skiaDrawGesture() {
  const skiaPrevPointRef = useRef<SkPoint>(Skia.Point(0, 0));

  const skiaDrawContext = useSkiaDrawContext();

  const notepadContext = useRevisionNotepadContext();

  return Gesture.Pan()
    .onStart(e => {
      switch (notepadContext.notepadState.notepadMenu) {
        case 'drawing':
        case 'colors': {
          // Obtain the color, size and pathType to create a drawing
          const { color, size, pathType } = skiaDrawContext.drawState;
          skiaDrawContext.drawCommands.addSkiaObject(
            createSkiaPath(e.x, e.y, color, size, pathType)
          );
          break;
        }
        case 'selection': {
          // The X and Y of the gesture are made into a SkiaPoint
          // Get the closest drawObject from the SkiaPoint
          const skiaDrawObject = findClosestDrawObjectToPoint(
            Skia.Point(e.x, e.y),
            skiaDrawContext.drawState.skiaObjects
          );

          if (
            skiaDrawObject &&
            skiaDrawContext.drawState.skiaObjects.length === 0
          ) {
            // Add the SkiaDrawObject to the array with the draw command
            skiaDrawContext.drawCommands.setSelectedSkiaObjects(skiaDrawObject);
            skiaDrawContext.drawCommands.setSelectionRect(undefined);
            break;
          }

          // Get the bounding box of all selected SkiaDrawObjects
          const skiaBoundingBox = getBoundingBox(
            skiaDrawContext.drawState.selectedSkiaObjects
          );
          if (
            skiaBoundingBox &&
            findPointInSkiaRect(Skia.Point(e.x, e.y), skiaBoundingBox)
          ) {
            skiaDrawContext.drawCommands.setResizeMode(
              findResizeMode(
                Skia.Point(e.x, e.y),
                skiaDrawContext.drawState.selectedSkiaObjects
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
      switch (notepadContext.notepadState.notepadMenu) {
        case undefined:
        case 'drawing':
        case 'colors': {
          const skiaDrawObject =
            skiaDrawContext.drawState.skiaObjects[
              skiaDrawContext.drawState.skiaObjects.length - 1
            ];
          const xQuad = (skiaPrevPointRef.current.x + e.x) / 2;
          const yQuad = (skiaPrevPointRef.current.y + e.y) / 2;
          skiaDrawObject.skiaPath.quadTo(
            e.x - skiaPrevPointRef.current.x,
            e.y - skiaPrevPointRef.current.y,
            xQuad,
            yQuad
          );
          break;
        }
        case 'selection': {
          if (skiaDrawContext.drawState.selectedSkiaObjects.length > 0) {
            resizeSkiaObjectsBy(
              e.x,
              e.y,
              skiaDrawContext.drawState.resizeMode,
              skiaDrawContext.drawState.selectedSkiaObjects
            );
          } else {
            if (skiaDrawContext.drawState.currentSelectionRect) {
              skiaDrawContext.drawCommands.setSelectionRect(
                Skia.XYWHRect(
                  skiaDrawContext.drawState.currentSelectionRect.x,
                  skiaDrawContext.drawState.currentSelectionRect.y,
                  e.x - skiaDrawContext.drawState.currentSelectionRect.x,
                  e.y - skiaDrawContext.drawState.currentSelectionRect.y
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
      switch (notepadContext.notepadState.notepadMenu) {
        case 'selection': {
          if (skiaDrawContext.drawState.currentSelectionRect) {
            // Find skiaObjects within the bounds of the skiaRect
            const skiaObjectsInRect = findSkiaObjectsInRect(
              skiaDrawContext.drawState.currentSelectionRect,
              skiaDrawContext.drawState.skiaObjects
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
