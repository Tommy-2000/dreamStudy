export type NoteUIMenu =
  | 'typing'
  | 'drawing'
  | 'selection'
  | 'colors'
  | 'saved';

export interface NoteUIState {
  noteMenu: NoteUIMenu | undefined;
  noteModalVisible: boolean;
}

export interface NoteUICommands {
  toggleNoteMenu: (noteUIMenu: NoteUIMenu | undefined) => void;
  toggleNoteModal: (visible: boolean) => void;
}

export interface NoteUIContextProps {
  state: NoteUIState;
  commands: NoteUICommands;
  addNoteListener: (
    noteListener: (noteUIState: NoteUIState) => void
  ) => () => void;
}
