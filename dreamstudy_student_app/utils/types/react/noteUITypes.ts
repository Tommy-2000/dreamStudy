export type NoteUIMenu = 'typing' | 'drawing' | 'selection' | 'colors';

export type NoteUIState = {
  noteMenu: NoteUIMenu | undefined;
  noteModalVisible: boolean;
};

export type NoteUICommands = {
  toggleNoteMenu: (noteUIMenu: NoteUIMenu | undefined) => void;
  toggleNoteModal: (visible: boolean) => void;
};

export type NoteUIContextType = {
  state: NoteUIState;
  commands: NoteUICommands;
  addNoteListener: (
    noteListener: (noteUIState: NoteUIState) => void
  ) => () => void;
};
