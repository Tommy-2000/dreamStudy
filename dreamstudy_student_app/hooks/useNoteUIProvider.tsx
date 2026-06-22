import {
    NoteUIContextProps,
    NoteUIMenu,
    NoteUIState
} from '@/utils/types/noteUIProps';
import React, { PropsWithChildren, useMemo } from 'react';
import { NoteUIContext } from './useNoteUIContext';

export const createNoteUIProviderValue = (): NoteUIContextProps => {
  const noteUIState: NoteUIState = {
    noteMenu: undefined,
    noteModalVisible: false
  };

  const noteUIListeners = [] as ((ns: NoteUIState) => void)[];
  const notifyNoteUIListeners = (ns: NoteUIState) =>
    noteUIListeners.forEach(l => l(ns));

  const noteUICommands = {
    toggleNoteMenu: (noteUIMenu: NoteUIMenu | undefined) => {
      noteUIState.noteMenu =
        noteUIState.noteMenu === noteUIMenu ? undefined : noteUIMenu;
      notifyNoteUIListeners(noteUIState);
    },
    toggleNoteModal: (visible: boolean) => {
      noteUIState.noteModalVisible = visible;
      notifyNoteUIListeners(noteUIState);
    }
  };

  return {
    state: noteUIState,
    commands: noteUICommands,
    addNoteListener: (cns: (noteUIState: NoteUIState) => void) => {
      noteUIListeners.push(cns);
      return () => noteUIListeners.splice(noteUIListeners.indexOf(cns), 1);
    }
  };
};

export const useNoteUIProvider = () => {
  const noteUIContext = useMemo(() => createNoteUIProviderValue(), []);
  // Return the value of the provider as a component
  return ({ children }: PropsWithChildren) => (
    <NoteUIContext.Provider value={noteUIContext}>
      {children}
    </NoteUIContext.Provider>
  );
};
