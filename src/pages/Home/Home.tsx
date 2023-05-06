import { LayoutCentered, LayoutStyled } from "@/styled-components";
import { InfiniteScroll } from "@/components/infinite-scroll";
import { AppStore } from "@/redux/store.tsx";
import { useInfiniteScroll } from "@/hooks";
import { useSelector } from "react-redux";
import { NoteCard } from "@/components/notes";
import { HomeHeader } from "@/components/home-header";

export default function Home() {
  const { notes } = useSelector((state: AppStore) => state.notes);
  const { displayedData } = useInfiniteScroll(notes);
  return (
    <LayoutStyled>
      <HomeHeader />
      <InfiniteScroll>
        {displayedData?.map((note) => (
          <LayoutCentered key={note.id}>
            <NoteCard {...note} />
          </LayoutCentered>
        ))}
      </InfiniteScroll>
    </LayoutStyled>
  );
}
