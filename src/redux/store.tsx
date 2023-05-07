import { configureStore } from "@reduxjs/toolkit";
import { Note } from "@/models";
import { notesReducer } from "./slices";
export interface AppStore {
  notes: {
    notes: Note[];
    originalNotes: Note[];
    selectedNote: Note | null;
  };
}

export default configureStore<AppStore>({
  reducer: {
    notes: notesReducer,
  },
});
