export type NotepadMenu = 'typing' | 'drawing' | 'selection' | 'colors';

export type NotepadState = {
  notepadMenu: NotepadMenu | undefined;
};

export type NotepadCommands = {
  toggleNotepadMenu: (notepadMenu: NotepadMenu | undefined) => void;
};

export type NotepadContextType = {
  notepadState: NotepadState;
  notepadCommands: NotepadCommands;
  addNotepadListener: (
    notepadListener: (notepadState: NotepadState) => void
  ) => () => void;
};
