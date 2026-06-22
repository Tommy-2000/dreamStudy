import { SkiaDrawContextProps } from '@/utils/types/skia/skiaDrawProps';
import { useContext } from 'react';
import { SkiaDrawContext } from './useSkiaDrawProvider';

export const useSkiaDrawContext = (): SkiaDrawContextProps => {
  const skiaDrawingContext = useContext(SkiaDrawContext);

  // The context object obtained from the hook SHOULD NOT be null or undefined
  if (skiaDrawingContext === null || undefined) {
    throw Error(
      'SkiaDrawingContext is missing or undefined, please try again later'
    );
  }
  return skiaDrawingContext;
};
