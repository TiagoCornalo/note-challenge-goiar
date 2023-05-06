import { createSlice } from "@reduxjs/toolkit";
import { Note } from "@/models";
const storedNotes = localStorage.getItem("notes");
export const NoteInitialState: Note[] = storedNotes
  ? JSON.parse(storedNotes)
  : [];

export const notesSlice = createSlice({
  name: "notes",
  initialState: NoteInitialState,
  reducers: {
    addNote: (state, action) => {
      const updatedState = [...state, action.payload];
      localStorage.setItem("notes", JSON.stringify(updatedState));
      return updatedState;
    },
    removeNote: (state, action) => {
      const index = state.findIndex((note) => note.id === action.payload);
      if (index !== -1) {
        const updatedState = [
          ...state.slice(0, index),
          ...state.slice(index + 1),
        ];
        localStorage.setItem("notes", JSON.stringify(updatedState));
        return updatedState;
      }
      return state;
    },
    updateNote: (state, action) => {
      const index = state.findIndex((note) => note.id === action.payload.id);
      if (index !== -1) {
        const updatedState = [...state];
        updatedState[index] = action.payload;
        localStorage.setItem("notes", JSON.stringify(updatedState));
        return updatedState;
      }
      return state;
    },
    filterByTitleOrDescription: (state, action) => {
      const { searchText } = action.payload;
      const regex = new RegExp(searchText, "i");
      const updatedState = [...state];
      return updatedState.filter(
        (note) => regex.test(note.title) || regex.test(note.content || "")
      );
    },
    filterByNoteType: (state, action) => {
      const { noteType } = action.payload;
      const updatedState = [...state];
      return updatedState.filter((note) => note.type === noteType);
    },
    resetNotes: () => NoteInitialState,
  },
});

export const {
  addNote,
  removeNote,
  updateNote,
  filterByNoteType,
  filterByTitleOrDescription,
} = notesSlice.actions;

export default notesSlice.reducer;
