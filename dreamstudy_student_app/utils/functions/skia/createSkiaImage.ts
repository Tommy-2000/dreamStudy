import { Skia, SkImage } from '@shopify/react-native-skia';
import { appValues } from '../../appConstants';
import { SkiaObject } from '../../types/skia/skiaDrawTypes';

export default function createSkiaImage(skiaImage: SkImage): SkiaObject {
  const skiaPath = Skia.Path.Make();

  skiaPath.addRect({
    x: appValues.dimensionWidth / 2 - 50,
    y: appValues.dimensionHeight / 4 - 50,
    width: 100,
    height: 100
  });

  return {
    skiaType: 'image',
    skiaDrawingType: 'image',
    image: skiaImage,
    skiaPath: skiaPath,
    path: skiaPath
  };
}
