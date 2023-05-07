import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DetailNoteModalStyled,
  DeleteNoteButton,
  DeleteNoteIcon,
} from "@/components/modals/detail-note";
import { AppStore } from "@/redux/store";
import { removeNote, clearSelectedNote } from "@/redux/slices";
import { TextStyled, TitleStyled } from "@/styled-components";
import { useModalContext } from "@/context";

export default function DetailNoteModal() {
  const dispatch = useDispatch();
  const { selectedNote } = useSelector((state: AppStore) => state.notes);
  const { removeAllModals } = useModalContext();

  useEffect(() => {
    return () => {
      dispatch(clearSelectedNote());
    };
  }, [dispatch]);

  const handleDeleteNote = () => {
    if (selectedNote) {
      dispatch(removeNote(selectedNote.id));
      dispatch(clearSelectedNote());
      removeAllModals?.();
    }
  };

  return (
    <DetailNoteModalStyled>
      <DeleteNoteButton onClick={handleDeleteNote}>
        <DeleteNoteIcon />
      </DeleteNoteButton>
      <TitleStyled margin="10px 0 0 0">{selectedNote?.title}</TitleStyled>
      <TextStyled>{selectedNote?.type}</TextStyled>
      <TextStyled>{selectedNote?.date}</TextStyled>
      <TextStyled>{selectedNote?.content}</TextStyled>
    </DetailNoteModalStyled>
  );
}
