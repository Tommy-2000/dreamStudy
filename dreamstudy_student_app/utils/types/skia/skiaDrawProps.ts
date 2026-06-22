import {
  SkColor,
  SkImage,
  SkPath,
  SkRect,
  SkSize
} from '@shopify/react-native-skia';

export type SkiaDrawProps = 'path' | 'image';

export type SkiaPathPropType = 'normal' | 'dashed' | 'discreted';

export type SkiaObject = {
  skiaDrawingProps: SkiaDrawProps;
  path: SkPath;
} & (
  | {
      skiaPropType: 'path';
      pathPropType: SkiaPathPropType;
      path: SkPath;
      color: SkColor;
      size: SkSize;
    }
  | { skiaPropType: 'image'; path: SkPath; image: SkImage }
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
  skPathPropType: SkiaPathPropType;
  skObjects: SkObjects;
  selectedSkObjects: SkObjects;
  currentSelectionSkRect: SkRect | undefined;
  skResizeMode: SkiaResizeMode | undefined;
  skBackgroundColor: SkColor;
};

export type SkiaDrawCommands = {
  addSkiaObject: (drawObject: SkiaObject) => void;
  setSelectedSkiaObjects: (...drawObjects: SkObjects) => void;
  setPathPropType: (propType: SkiaPathPropType) => void;
  setColor: (color: SkColor) => void;
  setBackgroundColor: (backgroundColor: SkColor) => void;
  setSelectionRect: (selectionRect: SkRect | undefined) => void;
  setResizeMode: (resizeMode: SkiaResizeMode | undefined) => void;
  setSize: (size: SkSize) => void;
  deleteSelectedSkiaObjects: () => void;
  deleteAllSkiaObjects: () => void;
  cleanUnecessarySkiaObjects: () => Promise<void>;
};

export type SkiaDrawContextProps = {
  state: SkiaDrawState;
  commands: SkiaDrawCommands;
  addDrawListener: (
    drawListener: (drawState: SkiaDrawState) => void
  ) => () => void;
};
