import {
  NotepadContextType,
  NotepadMenu,
  NotepadState
} from '@/utils/types/react/notepadTypes';
import React, { PropsWithChildren, useMemo } from 'react';

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

export const NotepadContext = React.createContext<NotepadContextType>(
  createNotepadProviderValue()
);

export const useNotepadProvider = () => {
  const notepadContext = useMemo(() => createNotepadProviderValue(), []);
  // Return the value of the provider as a component
  return ({ children }: PropsWithChildren) => (
    <NotepadContext.Provider value={notepadContext}>
      {children}
    </NotepadContext.Provider>
  );
};
