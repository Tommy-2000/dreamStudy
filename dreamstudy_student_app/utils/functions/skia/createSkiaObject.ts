import { Skia, SkImage } from '@shopify/react-native-skia';
import { reactValues } from '../../appConstants';
import { SkiaObject } from '../../types/skia/skiaDrawProps';

export default function createSkiaObject(skiaImage: SkImage): SkiaObject {
  const skiaPath = Skia.Path.Make();

  skiaPath.addRect({
    x: reactValues.dimensionWidth / 2 - 50,
    y: reactValues.dimensionHeight / 4 - 50,
    width: 100,
    height: 100
  });

  return {
    skiaPropType: 'image',
    skiaDrawingProps: 'image',
    image: skiaImage,
    path: skiaPath
  };
}
