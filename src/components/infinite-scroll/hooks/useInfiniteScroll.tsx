import { useState, useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppStore } from "@/redux/store.tsx";
import { Note } from "@/models";
import { addNote } from "@/redux/slices";

export default function useInfiniteScroll() {
  const dispatch = useDispatch();
  const notes = useSelector((state: AppStore) => state.notes);
  const [loading] = useState<boolean>(false);
  const [visibleNotes, setVisibleNotes] = useState<number>(6);

  const observer = useRef<IntersectionObserver | null>(null);

  const lastNoteRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && notes.length > visibleNotes) {
          setVisibleNotes((prevVisibleNotes) => prevVisibleNotes + 6);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, notes.length, visibleNotes]
  );

  useEffect(() => {
    for (let i = 0; i < 12; i++) {
      const newNote: Note = {
        id: new Date().getTime() + i,
        title: `Post-it inicial ${i}`,
        date: new Date().toLocaleDateString(),
        type: "Note",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      };
      dispatch(addNote(newNote));
    }
  }, [dispatch]);

  const displayedNotes = notes.slice(0, visibleNotes);

  return { displayedNotes, lastNoteRef };
}
