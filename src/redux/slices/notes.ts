import { createSlice } from "@reduxjs/toolkit";
import { Note } from "@/models";
import toast from "react-hot-toast";
const storedNotes = localStorage.getItem("notes");
export const NoteInitialState: Note[] = storedNotes
  ? JSON.parse(storedNotes)
  : [];

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: NoteInitialState,
    originalNotes: NoteInitialState,
  },
  reducers: {
    addNote: (state, action) => {
      const updatedNotes = [action.payload, ...state.notes];
      const updatedState = {
        notes: updatedNotes,
        originalNotes: updatedNotes,
      };
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return updatedState;
    },
    removeNote: (state, action) => {
      const index = state.notes.findIndex((note) => note.id === action.payload);
      if (index !== -1) {
        const updatedNotes = [
          ...state.notes.slice(0, index),
          ...state.notes.slice(index + 1),
        ];
        const updatedState = {
          notes: updatedNotes,
          originalNotes: updatedNotes,
        };
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
        return updatedState;
      }
      return state;
    },
    updateNote: (state, action) => {
      const index = state.notes.findIndex(
        (note) => note.id === action.payload.id
      );
      if (index !== -1) {
        const updatedNotes = [...state.notes];
        updatedNotes[index] = action.payload;
        const updatedState = {
          notes: updatedNotes,
          originalNotes: updatedNotes,
        };
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
        return updatedState;
      }
      return state;
    },
    filterByTitleOrDescription: (state, action) => {
      const { searchText } = action.payload;
      const regex = new RegExp(searchText, "i");
      const filteredNotes = state.originalNotes.filter(
        (note) =>
          regex.test(note.title) ||
          regex.test(note.content || "") ||
          regex.test(note.type)
      );
      if (filteredNotes.length === 0) {
        toast.error("La búsqueda no arrojó resultados");
      } else {
        toast.success(`${filteredNotes.length} resultados encontrados`);
        return {
          ...state,
          notes: filteredNotes,
        };
      }
    },
    filterByNoteType: (state, action) => {
      const { noteType } = action.payload;
      const filteredNotes = state.originalNotes.filter(
        (note) => note.type === noteType
      );
      return {
        ...state,
        notes: filteredNotes,
      };
    },
    resetNotes: (state) => {
      return {
        ...state,
        notes: state.originalNotes,
      };
    },
  },
});

export const {
  addNote,
  removeNote,
  updateNote,
  filterByNoteType,
  filterByTitleOrDescription,
  resetNotes,
} = notesSlice.actions;

export default notesSlice.reducer;
