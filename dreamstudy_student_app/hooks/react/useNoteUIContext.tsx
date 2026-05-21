import { NoteUIContextType } from '@/utils/types/react/noteUITypes';
import { useContext } from 'react';
import { NoteUIContext } from './useNoteUIProvider';

export const useNoteUIContext = (): NoteUIContextType => {
  const noteUIContext = useContext(NoteUIContext);

  // The context object obtained from the hook SHOULD NOT be null or undefined
  if (noteUIContext === null || undefined) {
    throw Error(
      'NoteUIContext is missing or undefined, please try again later'
    );
  }
  return noteUIContext!;
};
