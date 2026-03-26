import {
  SkColor,
  SkImage,
  SkPath,
  SkRect,
  SkSize
} from '@shopify/react-native-skia';

export type SkiaDrawType = 'path' | 'image';

export type SkiaPathType = 'normal' | 'dashed' | 'discreted';

export type SkiaDrawObject = {
  skiaDrawingType: SkiaDrawType;
  skiaPath: SkPath;
} & (
  | {
      skiaType: 'path';
      skiaPathType: SkiaPathType;
      skiaPath: SkPath;
      color: SkColor;
      size: SkSize;
    }
  | { skiaType: 'image'; path: SkPath; image: SkImage }
);

export type SkiaDrawObjects = SkiaDrawObject[];

export type SkiaResizeMode =
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight';

export type SkiaDrawState = {
  size: SkSize;
  color: SkColor;
  pathType: SkiaPathType;
  drawObjects: SkiaDrawObjects;
  selectedDrawObjects: SkiaDrawObjects;
  currentSelectionRect: SkRect | undefined;
  resizeMode: SkiaResizeMode | undefined;
  backgroundColor: SkColor;
};

export type SkiaDrawCommands = {
  addDrawObject: (drawObject: SkiaDrawObject) => void;
  setSelectedDrawObjects: (...drawObjects: SkiaDrawObjects) => void;
  setPathType: (type: SkiaPathType) => void;
  setColor: (color: SkColor) => void;
  setBackgroundColor: (backgroundColor: SkColor) => void;
  setSelectionRect: (selectionRect: SkRect | undefined) => void;
  setResizeMode: (resizeMode: SkiaResizeMode | undefined) => void;
  setSize: (size: SkSize) => void;
  deleteSelectedDrawObjects: () => void;
  deleteAllDrawObjects: () => void;
  cleanUnecessarySkiaObjects: () => Promise<void>;
};

export type SkiaDrawContextType = {
  drawState: SkiaDrawState;
  drawCommands: SkiaDrawCommands;
  addDrawListener: (
    drawListener: (drawState: SkiaDrawState) => void
  ) => () => void;
};
