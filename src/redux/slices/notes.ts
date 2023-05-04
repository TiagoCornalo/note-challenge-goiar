import { createSlice } from "@reduxjs/toolkit";
import { NoteEmptyState } from "@/models";

/*interface Action {
  type: string;
  payload: Note;
}*/

export const notesSlice = createSlice({
  name: "notes",
  initialState: NoteEmptyState,
  reducers: {
    addNote: (state, action) => {
      const updatedState = [...state, action.payload];
      return updatedState;
    },
    removeNote: (state, action) => {
      const index = state.findIndex((note) => note.id === action.payload);
      if (index !== -1) {
        const updatedState = [
          ...state.slice(0, index),
          ...state.slice(index + 1),
        ];
        return updatedState;
      }
      return state;
    },
    updateNote: (state, action) => {
      const index = state.findIndex((note) => note.id === action.payload.id);
      if (index !== -1) {
        const updatedState = [...state];
        updatedState[index] = action.payload;
        return updatedState;
      }
      return state;
    },
  },
});

export const { addNote, removeNote, updateNote } = notesSlice.actions;

export default notesSlice.reducer;
