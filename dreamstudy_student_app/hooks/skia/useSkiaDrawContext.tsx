import { SkiaDrawContextType } from '@/utils/types/skia/skiaDrawTypes';
import { useContext } from 'react';
import { SkiaDrawContext } from './useSkiaDrawProvider';

export const useSkiaDrawContext = (): SkiaDrawContextType => {
  const skiaDrawingContext = useContext(SkiaDrawContext);

  if (skiaDrawingContext === null) {
    throw Error('SkiaDrawingContext is missing, please try again later');
  }
  return skiaDrawingContext!;
};
