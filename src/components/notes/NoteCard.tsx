import { NotesContainer, Pin } from "@/components/notes/notes.styled";
import { Note } from "@/models";
import { TitleStyled, TextStyled } from "@/styled-components";
import { useModalContext } from "@/context";
import { useDispatch } from "react-redux";
import { selectNote } from "@/redux/slices";
import { DetailNoteModal } from "@/components/modals/detail-note";

export default function NoteCard(note: Note) {
  const { title, type, date, content } = note;
  const { addModal, removeModal } = useModalContext();
  const dispatch = useDispatch();
  const handleOpenDetailNoteModal = async () => {
    await dispatch(selectNote(note));
    addModal({
      id: "detail-note",
      content: <DetailNoteModal />,
      onClose: () => removeModal({ id: "detail-note" }),
    });
  };

  return (
    <NotesContainer onClick={handleOpenDetailNoteModal}>
      <TitleStyled margin={"10px 0 0 0"}>{title}</TitleStyled>
      <TextStyled>{type}</TextStyled>
      <TextStyled>{date}</TextStyled>
      <TextStyled>
        {(content ?? "").length > 160
          ? content?.slice(0, 160) + "..."
          : content}
      </TextStyled>
      <Pin />
    </NotesContainer>
  );
}
