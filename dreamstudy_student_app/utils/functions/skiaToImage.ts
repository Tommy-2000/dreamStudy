import { Skia } from '@shopify/react-native-skia';

// A sample base64-encoded pixel
const skiaData = Skia.Data.fromBase64(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=='
);
const skiaImage = Skia.Image.MakeImageFromEncoded(skiaData);
