import {
  NotepadContextType,
  NotepadMenu,
  NotepadState
} from '@/utils/types/notepadTypes';
import React, { PropsWithChildren, useMemo } from 'react';

export const NotepadContext = React.createContext<
  NotepadContextType | undefined
>(undefined);

const createNotepadProviderValue = (): NotepadContextType => {
  const notepadState: NotepadState = {
    notepadMenu: undefined
  };

  const notepadListeners = [] as ((ns: NotepadState) => void)[];
  const notifyNotepadListeners = (ns: NotepadState) =>
    notepadListeners.forEach(l => l(ns));

  const notepadCommands = {
    toggleNotepadMenu: (notepadMenu: NotepadMenu | undefined) => {
      notepadState.notepadMenu =
        notepadState.notepadMenu === notepadMenu ? undefined : notepadMenu;
      notifyNotepadListeners(notepadState);
    }
  };

  return {
    notepadState,
    notepadCommands,
    addNotepadListener: (cns: (notepadState: NotepadState) => void) => {
      notepadListeners.push(cns);
      return () => notepadListeners.splice(notepadListeners.indexOf(cns), 1);
    }
  };
};

export const useNotepadProvider = () => {
  const notepadContext = useMemo(() => createNotepadProviderValue(), []);
  // Return the value of the provider as a component
  return ({ children }: PropsWithChildren) => (
    <NotepadContext.Provider value={notepadContext}>
      {children}
    </NotepadContext.Provider>
  );
};
