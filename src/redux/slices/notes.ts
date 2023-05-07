import { createSlice } from "@reduxjs/toolkit";
import { Note, NotesState } from "@/models";
import toast from "react-hot-toast";
const storedNotes = localStorage.getItem("notes");
export const NoteInitialState: Note[] = storedNotes
  ? JSON.parse(storedNotes)
  : [];

const initialState: NotesState = {
  notes: NoteInitialState,
  originalNotes: NoteInitialState,
  selectedNote: null,
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const updatedNotes = [action.payload, ...state.notes];
      const updatedState = {
        ...state,
        notes: updatedNotes,
        originalNotes: updatedNotes,
      };
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return updatedState;
    },
    removeNote: (state, action) => {
      console.log(action.payload);
      const index = state.notes.findIndex((note) => note.id === action.payload);
      if (index !== -1) {
        const updatedNotes = [
          ...state.notes.slice(0, index),
          ...state.notes.slice(index + 1),
        ];
        const updatedState = {
          ...state,
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
          ...state,
          notes: updatedNotes,
          originalNotes: updatedNotes,
        };
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
        return updatedState;
      }
      return state;
    },
    selectNote: (state, action) => {
      state.selectedNote = action.payload;
    },
    clearSelectedNote: (state) => {
      state.selectedNote = null;
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
  selectNote,
  clearSelectedNote,
} = notesSlice.actions;

export default notesSlice.reducer;
