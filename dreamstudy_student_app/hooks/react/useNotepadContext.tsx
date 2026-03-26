import { NotepadContextType } from '@/utils/types/notepadTypes';
import { useContext } from 'react';
import { NotepadContext } from './useNotepadProvider';

export const useNotepadContext = (): NotepadContextType => {
  const notepadContext = useContext(NotepadContext);

  if (notepadContext === null) {
    throw Error('NotepadContext is missing, please try again later');
  }
  return notepadContext!;
};
