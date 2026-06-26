import { NoteUIContextProps } from '@/utils/types/noteUIProps';
import { createContext, useContext } from 'react';
import { createNoteUIProviderValue } from './useNoteUIProvider';

export const NoteUIContext = createContext<NoteUIContextProps>(
  createNoteUIProviderValue()
);

export const useNoteUIContext = (): NoteUIContextProps => {
  const noteUIContext = useContext(NoteUIContext);

  // The context object obtained from the hook SHOULD NOT be null or undefined
  if (noteUIContext === null || undefined) {
    throw Error(
      'NoteUIContext is missing or undefined, please try again later'
    );
  }
  return noteUIContext!;
};
