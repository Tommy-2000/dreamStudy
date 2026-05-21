import {
    SkColor,
    SkImage,
    SkPath,
    SkRect,
    SkSize
} from '@shopify/react-native-skia';

export type SkiaDrawType = 'path' | 'image';

export type SkiaPathType = 'normal' | 'dashed' | 'discreted';

export type SkiaObject = {
  skiaDrawingType: SkiaDrawType;
  path: SkPath;
} & (
  | {
      skiaType: 'path';
      pathType: SkiaPathType;
      path: SkPath;
      color: SkColor;
      size: SkSize;
    }
  | { skiaType: 'image'; path: SkPath; image: SkImage }
);

export type SkObjects = SkiaObject[];

export type SkiaResizeMode =
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight';

export type SkiaDrawState = {
  skSize: SkSize;
  skColor: SkColor;
  skPathType: SkiaPathType;
  skObjects: SkObjects;
  selectedSkObjects: SkObjects;
  currentSelectionSkRect: SkRect | undefined;
  skResizeMode: SkiaResizeMode | undefined;
  skBackgroundColor: SkColor;
};

export type SkiaDrawCommands = {
  addSkiaObject: (drawObject: SkiaObject) => void;
  setSelectedSkiaObjects: (...drawObjects: SkObjects) => void;
  setPathType: (type: SkiaPathType) => void;
  setColor: (color: SkColor) => void;
  setBackgroundColor: (backgroundColor: SkColor) => void;
  setSelectionRect: (selectionRect: SkRect | undefined) => void;
  setResizeMode: (resizeMode: SkiaResizeMode | undefined) => void;
  setSize: (size: SkSize) => void;
  deleteSelectedSkiaObjects: () => void;
  deleteAllSkiaObjects: () => void;
  cleanUnecessarySkiaObjects: () => Promise<void>;
};

export type SkiaDrawContextType = {
  state: SkiaDrawState;
  commands: SkiaDrawCommands;
  addDrawListener: (
    drawListener: (drawState: SkiaDrawState) => void
  ) => () => void;
};
