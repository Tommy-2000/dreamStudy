import {
  SkiaDrawContextType,
  SkiaDrawState,
  SkiaObject,
  SkiaObjects,
  SkiaPathType,
  SkiaResizeMode
} from '@/utils/types/skia/skiaDrawTypes';
import { SkColor, Skia, SkRect, SkSize } from '@shopify/react-native-skia';
import React, { PropsWithChildren, useMemo } from 'react';

const createSkiaDrawProviderValue = (): SkiaDrawContextType => {
  const skDrawState: SkiaDrawState = {
    size: { height: 2, width: 2 },
    color: Skia.Color('#ffffff'),
    pathType: 'normal',
    skiaObjects: [],
    selectedSkiaObjects: [],
    currentSelectionRect: undefined,
    resizeMode: undefined,
    backgroundColor: Skia.Color('#ffffff')
  };

  const skiaListeners = [] as ((skds: SkiaDrawState) => void)[];
  const notifySkiaListeners = (skds: SkiaDrawState) =>
    skiaListeners.forEach(l => l(skds));

  const skiaCommands = {
    addSkiaObject: (skDrawObject: SkiaObject) => {
      skDrawState.skiaObjects.push(skDrawObject);
      notifySkiaListeners(skDrawState);
    },
    setSelectedSkiaObjects: (...selectedSkDrawObjects: SkiaObjects) => {
      skDrawState.selectedSkiaObjects = selectedSkDrawObjects;
      notifySkiaListeners(skDrawState);
    },
    setPathType: (skPathType: SkiaPathType) => {
      skDrawState.pathType = skPathType;
      notifySkiaListeners(skDrawState);
    },
    setColor: (skColor: SkColor) => {
      skDrawState.color = skColor;
      skDrawState.selectedSkiaObjects.forEach((d: SkiaObject) => {
        if (d.skiaType === 'path') {
          d.color = skColor;
        }
      });
      notifySkiaListeners(skDrawState);
    },
    setBackgroundColor: (skBackgroundColor: SkColor) => {
      skDrawState.backgroundColor = skBackgroundColor;
      notifySkiaListeners(skDrawState);
    },
    setSize: (skSize: SkSize) => {
      skDrawState.size = skSize;
      skDrawState.selectedSkiaObjects.forEach((o: SkiaObject) => {
        if (o.skiaType === 'path') {
          o.size = skSize;
        }
      });
      notifySkiaListeners(skDrawState);
    },
    setSelectionRect: (skRect: SkRect | undefined) => {
      skDrawState.currentSelectionRect = skRect;
      notifySkiaListeners(skDrawState);
    },
    setResizeMode: (skResizeMode: SkiaResizeMode | undefined) => {
      skDrawState.resizeMode = skResizeMode;
      notifySkiaListeners(skDrawState);
    },
    deleteSelectedSkiaObjects: () => {
      skDrawState.skiaObjects = skDrawState.skiaObjects.filter(
        o => !skDrawState.selectedSkiaObjects.includes(o)
      );
      skDrawState.selectedSkiaObjects = [];
      notifySkiaListeners(skDrawState);
    },
    deleteAllSkiaObjects: () => {
      skDrawState.skiaObjects = [];
      skDrawState.selectedSkiaObjects = [];
      notifySkiaListeners(skDrawState);
    },
    cleanUnecessarySkiaObjects: async () => {
      skDrawState.selectedSkiaObjects = [];
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
