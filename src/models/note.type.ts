export interface Note {
  id: number;
  title: string;
  type: string;
  content: string;
  date?: string;
}

export const NoteEmptyState: Note[] = [
  {
    id: 0,
    title: '',
    type: '',
    content: '',
    date: ''
  }
]
