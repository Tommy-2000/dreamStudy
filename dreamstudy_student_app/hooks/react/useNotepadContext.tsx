import { NotepadContextType } from '@/utils/types/react/notepadTypes';
import { useContext } from 'react';
import { NotepadContext } from './useNotepadProvider';

export const useNotepadContext = (): NotepadContextType => {
  const notepadContext = useContext(NotepadContext);

  // The context object obtained from the hook SHOULD NOT be null or undefined
  if (notepadContext === null || undefined) {
    throw Error(
      'NotepadContext is missing or undefined, please try again later'
    );
  }
  return notepadContext!;
};
