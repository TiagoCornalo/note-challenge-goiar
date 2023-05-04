import { NoteCard } from "@/components/notes";
import { useInfiniteScroll } from "@/components/infinite-scroll/hooks";
import { InfiniteScrollContainer } from "@/components/infinite-scroll";

export default function InfiniteNotesScroll() {
  const { displayedNotes, lastNoteRef } = useInfiniteScroll();
  return (
    <InfiniteScrollContainer>
      {displayedNotes.map((note, index) => {
        if (displayedNotes.length === index + 1) {
          return (
            <div ref={lastNoteRef} key={note.id}>
              <NoteCard
                key={index + "A"}
                id={index + 1}
                title={note.title}
                content={note.content}
                type={note.type}
                date={note.date}
              />
            </div>
          );
        } else {
          return (
            <div key={note.id}>
              <NoteCard
                key={index + "B"}
                id={index + 1}
                title={note.title}
                content={note.content}
                type={note.type}
                date={note.date}
              />
            </div>
          );
        }
      })}
    </InfiniteScrollContainer>
  );
}
