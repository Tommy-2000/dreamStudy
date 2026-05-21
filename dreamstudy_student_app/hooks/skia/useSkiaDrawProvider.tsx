import {
  SkiaDrawContextType,
  SkiaDrawState,
  SkiaObject,
  SkiaPathType,
  SkiaResizeMode,
  SkObjects
} from '@/utils/types/skia/skiaDrawTypes';
import { SkColor, Skia, SkRect, SkSize } from '@shopify/react-native-skia';
import React, { PropsWithChildren, useMemo } from 'react';

const createSkiaDrawProviderValue = (): SkiaDrawContextType => {
  const skDrawState: SkiaDrawState = {
    skSize: { height: 2, width: 2 },
    skColor: Skia.Color('#ffffff'),
    skPathType: 'normal',
    skObjects: [],
    selectedSkObjects: [],
    currentSelectionSkRect: undefined,
    skResizeMode: undefined,
    skBackgroundColor: Skia.Color('#ffffff')
  };

  const skiaListeners = [] as ((skDrawState: SkiaDrawState) => void)[];
  const notifySkiaListeners = (skDrawState: SkiaDrawState) =>
    skiaListeners.forEach(l => l(skDrawState));

  const skiaCommands = {
    addSkiaObject: (skDrawObject: SkiaObject) => {
      skDrawState.skObjects.push(skDrawObject);
      notifySkiaListeners(skDrawState);
    },
    setSelectedSkiaObjects: (...selectedSkDrawObjects: SkObjects) => {
      skDrawState.selectedSkObjects = selectedSkDrawObjects;
      notifySkiaListeners(skDrawState);
    },
    setPathType: (skPathType: SkiaPathType) => {
      skDrawState.skPathType = skPathType;
      notifySkiaListeners(skDrawState);
    },
    setColor: (skColor: SkColor) => {
      skDrawState.skColor = skColor;
      skDrawState.selectedSkObjects.forEach((d: SkiaObject) => {
        if (d.skiaType === 'path') {
          d.color = skColor;
        }
      });
      notifySkiaListeners(skDrawState);
    },
    setBackgroundColor: (skBackgroundColor: SkColor) => {
      skDrawState.skBackgroundColor = skBackgroundColor;
      notifySkiaListeners(skDrawState);
    },
    setSize: (skSize: SkSize) => {
      skDrawState.skSize = skSize;
      skDrawState.selectedSkObjects.forEach((o: SkiaObject) => {
        if (o.skiaType === 'path') {
          o.size = skSize;
        }
      });
      notifySkiaListeners(skDrawState);
    },
    setSelectionRect: (skRect: SkRect | undefined) => {
      skDrawState.currentSelectionSkRect = skRect;
      notifySkiaListeners(skDrawState);
    },
    setResizeMode: (skResizeMode: SkiaResizeMode | undefined) => {
      skDrawState.skResizeMode = skResizeMode;
      notifySkiaListeners(skDrawState);
    },
    deleteSelectedSkiaObjects: () => {
      skDrawState.skObjects = skDrawState.skObjects.filter(
        o => !skDrawState.selectedSkObjects.includes(o)
      );
      skDrawState.selectedSkObjects = [];
      notifySkiaListeners(skDrawState);
    },
    deleteAllSkiaObjects: () => {
      skDrawState.skObjects = [];
      skDrawState.selectedSkObjects = [];
      notifySkiaListeners(skDrawState);
    },
    cleanUnecessarySkiaObjects: async () => {
      skDrawState.selectedSkObjects = [];
      notifySkiaListeners(skDrawState);
    }
  };
  return {
    drawState: skDrawState,
    drawCommands: skiaCommands,
    addDrawListener: (cds: (drawState: SkiaDrawState) => void) => {
      skiaListeners.push(cds);
      return () => skiaListeners.splice(skiaListeners.indexOf(cds), 1);
    }
  };
};

export const SkiaDrawContext = React.createContext<SkiaDrawContextType>(
  createSkiaDrawProviderValue()
);

export const useSkiaDrawProvider = () => {
  const skiaDrawContext = useMemo(() => createSkiaDrawProviderValue(), []);
  const skiaProviderComponent = ({ children }: PropsWithChildren) => (
    <SkiaDrawContext.Provider value={skiaDrawContext}>
      {children}
    </SkiaDrawContext.Provider>
  );
  return skiaProviderComponent;
};
