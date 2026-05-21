import {
  NoteUIContextType,
  NoteUIMenu,
  NoteUIState
} from '@/utils/types/react/noteUITypes';
import React, { PropsWithChildren, useMemo } from 'react';

const createNoteUIProviderValue = (): NoteUIContextType => {
  const noteUIState: NoteUIState = {
    noteUIMenu: undefined
  };

  const noteUIListeners = [] as ((ns: NoteUIState) => void)[];
  const notifyNoteUIListeners = (ns: NoteUIState) =>
    noteUIListeners.forEach(l => l(ns));

  const noteUICommands = {
    toggleNoteUIMenu: (noteUIMenu: NoteUIMenu | undefined) => {
      noteUIState.noteUIMenu =
        noteUIState.noteUIMenu === noteUIMenu ? undefined : noteUIMenu;
      notifyNoteUIListeners(noteUIState);
    }
  };

  return {
    noteUIState,
    noteUICommands,
    addNoteUIListener: (cns: (noteUIState: NoteUIState) => void) => {
      noteUIListeners.push(cns);
      return () => noteUIListeners.splice(noteUIListeners.indexOf(cns), 1);
    }
  };
};

export const NoteUIContext = React.createContext<NoteUIContextType>(
  createNoteUIProviderValue()
);

export const useNoteUIProvider = () => {
  const noteUIContext = useMemo(() => createNoteUIProviderValue(), []);
  // Return the value of the provider as a component
  return ({ children }: PropsWithChildren) => (
    <NoteUIContext.Provider value={noteUIContext}>
      {children}
    </NoteUIContext.Provider>
  );
};
