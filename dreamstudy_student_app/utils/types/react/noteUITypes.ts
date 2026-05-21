export type NoteUIMenu = 'typing' | 'drawing' | 'selection' | 'colors';

export type NoteUIState = {
  noteUIMenu: NoteUIMenu | undefined;
};

export type NoteUICommands = {
  toggleNoteUIMenu: (noteUIMenu: NoteUIMenu | undefined) => void;
};

export type NoteUIContextType = {
  noteUIState: NoteUIState;
  noteUICommands: NoteUICommands;
  addNoteUIListener: (
    noteUIListener: (noteUIState: NoteUIState) => void
  ) => () => void;
};
