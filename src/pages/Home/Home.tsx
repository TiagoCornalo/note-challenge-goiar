import { LayoutCentered, LayoutStyled } from "@/styled-components";
import { InfiniteScroll } from "@/components/infinite-scroll";
import { AppStore } from "@/redux/store.tsx";
import { useInfiniteScroll } from "@/hooks";
import { useSelector } from "react-redux";
import { NoteCard } from "@/components/notes";
import { HomeHeader } from "@/components/home-header";
import { useModalContext } from "@/context";
import { Modal } from "@/components/modals";
export default function Home() {
  const { notes } = useSelector((state: AppStore) => state);
  const { displayedData } = useInfiniteScroll(notes);
  const { modals } = useModalContext();
  return (
    <LayoutStyled>
      {modals?.map((modal) => (
        <Modal key={modal.id} onClose={modal.onClose}>
          {modal.content}
        </Modal>
      ))}
      <HomeHeader />
      <InfiniteScroll>
        {displayedData.map((note) => (
          <LayoutCentered key={note.id}>
            <NoteCard {...note} />
          </LayoutCentered>
        ))}
      </InfiniteScroll>
    </LayoutStyled>
  );
}
