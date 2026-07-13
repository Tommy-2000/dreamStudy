import { CanvasProps } from '@shopify/react-native-skia';
import { PropsWithChildren } from 'react';
import {
  ComposedGesture,
  GestureDetector,
  GestureHandlerRootView,
  GestureType
} from 'react-native-gesture-handler';
import {
  TouchAction,
  UserSelect
} from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon';
import { SkiaCanvas } from './skiaCanvas';

export function SkiaGestureCanvas({
  ref,
  style,
  gesture,
  userSelect,
  enableContextMenu,
  touchAction,
  children
}: {
  gesture: ComposedGesture | GestureType; // Any gesture type can be passed as a prop to this component
  userSelect?: UserSelect | undefined; // userSelect, enableContextMenu and touchAction are web-only gesture properties
  enableContextMenu?: boolean | undefined;
  touchAction?: TouchAction;
} & CanvasProps &
  PropsWithChildren) {
  return (
    <>
      <GestureHandlerRootView>
        <GestureDetector
          gesture={gesture}
          userSelect={userSelect}
          enableContextMenu={enableContextMenu}
          touchAction={touchAction}>
          <SkiaCanvas ref={ref} style={style}>
            {children}
          </SkiaCanvas>
        </GestureDetector>
      </GestureHandlerRootView>
    </>
  );
}
