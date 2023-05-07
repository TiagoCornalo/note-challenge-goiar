export interface Note {
  id: number;
  title: string;
  type: string;
  content?: string;
  date?: string;
}

export type NotesState = {
  notes: Note[];
  originalNotes: Note[];
  selectedNote: Note | null;
};
