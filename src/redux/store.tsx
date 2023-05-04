import { configureStore } from "@reduxjs/toolkit";
import { Note } from "@/models";
import { notesReducer } from "./slices";
export interface AppStore {
  notes: Note[];
}

export default configureStore<AppStore>({
  reducer: {
    notes: notesReducer,
  },
});
