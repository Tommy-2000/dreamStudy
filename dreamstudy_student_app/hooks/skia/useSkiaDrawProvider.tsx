import {
  SkiaDrawContextType,
  SkiaDrawObject,
  SkiaDrawObjects,
  SkiaDrawState,
  SkiaPathType,
  SkiaResizeMode
} from '@/utils/types/skia/skiaDrawTypes';
import { SkColor, Skia, SkRect, SkSize } from '@shopify/react-native-skia';
import React, { PropsWithChildren, useMemo } from 'react';

export const SkiaDrawContext = React.createContext<
  SkiaDrawContextType | undefined
>(undefined);

const createSkiaDrawProviderValue = (): SkiaDrawContextType => {
  const skDrawState: SkiaDrawState = {
    size: { height: 2, width: 2 },
    color: Skia.Color('#ffffff'),
    pathType: 'normal',
    drawObjects: [],
    selectedDrawObjects: [],
    currentSelectionRect: undefined,
    resizeMode: undefined,
    backgroundColor: Skia.Color('#ffffff')
  };

  const skiaListeners = [] as ((skds: SkiaDrawState) => void)[];
  const notifySkiaListeners = (skds: SkiaDrawState) =>
    skiaListeners.forEach(l => l(skds));

  const skiaCommands = {
    addDrawObject: (skDrawObject: SkiaDrawObject) => {
      skDrawState.drawObjects.push(skDrawObject);
      notifySkiaListeners(skDrawState);
    },
    setSelectedDrawObjects: (...selectedSkDrawObjects: SkiaDrawObjects) => {
      skDrawState.selectedDrawObjects = selectedSkDrawObjects;
      notifySkiaListeners(skDrawState);
    },
    setPathType: (skPathType: SkiaPathType) => {
      skDrawState.pathType = skPathType;
      notifySkiaListeners(skDrawState);
    },
    setColor: (skColor: SkColor) => {
      skDrawState.color = skColor;
      skDrawState.selectedDrawObjects.forEach((d: SkiaDrawObject) => {
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
      skDrawState.selectedDrawObjects.forEach((o: SkiaDrawObject) => {
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
    deleteSelectedDrawObjects: () => {
      skDrawState.drawObjects = skDrawState.drawObjects.filter(
        o => !skDrawState.selectedDrawObjects.includes(o)
      );
      skDrawState.selectedDrawObjects = [];
      notifySkiaListeners(skDrawState);
    },
    deleteAllDrawObjects: () => {
      skDrawState.drawObjects = [];
      skDrawState.selectedDrawObjects = [];
      notifySkiaListeners(skDrawState);
    },
    cleanUnecessarySkiaObjects: async () => {
      skDrawState.selectedDrawObjects = [];
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

export const useSkiaDrawProvider = () => {
  const skiaDrawContext = useMemo(() => createSkiaDrawProviderValue(), []);
  const skiaProviderComponent = ({ children }: PropsWithChildren) => (
    <SkiaDrawContext.Provider value={skiaDrawContext}>
      {children}
    </SkiaDrawContext.Provider>
  );
  return skiaProviderComponent;
};
