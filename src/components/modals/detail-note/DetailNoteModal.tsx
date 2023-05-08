import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DetailNoteModalStyled,
  DeleteNoteButton,
  DeleteNoteIcon,
  EditNoteButton,
  EditNoteIcon,
} from "@/components/modals/detail-note";
import { AppStore } from "@/redux/store";
import { removeNote, clearSelectedNote } from "@/redux/slices";
import { TextArea, TextStyled, TitleStyled } from "@/styled-components";
import { useModalContext } from "@/context";
import { useUpdateNote } from "@/hooks";
import { Input } from "@/components/inputs";
import Select from "react-select";
import { types } from "@/models";
import { Button } from "@/components/buttons";
import { CreateNoteForm } from "@/components/modals/create-note";

export default function DetailNoteModal() {
  const dispatch = useDispatch();
  const { selectedNote } = useSelector((state: AppStore) => state.notes);
  const { removeAllModals } = useModalContext();
  const [editMode, setEditMode] = useState(false);

  const {
    handleInputChange,
    handleTypeChange,
    handleTextAreaChange,
    handleUpdateNote,
    modalForm,
  } = useUpdateNote({ selectedNote });

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

  const handleCancelEdit = () => {
    setEditMode(false);
  };

  return (
    <DetailNoteModalStyled>
      <EditNoteButton
        onClick={() => setEditMode(true)}
        data-testid="edit-button"
      >
        <EditNoteIcon />
      </EditNoteButton>
      <DeleteNoteButton onClick={handleDeleteNote} data-testid="delete-button">
        <DeleteNoteIcon />
      </DeleteNoteButton>
      {!editMode ? (
        <>
          <TitleStyled margin="10px 0 0 0">{selectedNote?.title}</TitleStyled>
          <TextStyled>{selectedNote?.type}</TextStyled>
          <TextStyled>{selectedNote?.date}</TextStyled>
          <TextStyled>{selectedNote?.content}</TextStyled>
        </>
      ) : (
        <CreateNoteForm onSubmit={handleUpdateNote}>
          <Input
            name={"title"}
            type={"text"}
            onChange={handleInputChange}
            value={modalForm.title}
            placeholder={"Título de la nota"}
          ></Input>
          <Select
            aria-label={"Selecciona un tipo de nota"}
            options={types}
            onChange={(e: any) => handleTypeChange(e)}
            defaultValue={{ value: modalForm.type }}
            placeholder={"Selecciona un tipo de nota"}
          />
          <TextArea
            placeholder={"Contenido de la nota"}
            rows={5}
            name={"content"}
            value={modalForm.content}
            onChange={handleTextAreaChange}
          />
          <Button onClick={handleCancelEdit} type={"button"} margin={"20px 0"}>
            Cancelar
          </Button>
          <Button
            onClick={() => handleUpdateNote}
            type={"submit"}
            margin={"20px 0"}
          >
            Actualizar nota
          </Button>
        </CreateNoteForm>
      )}
    </DetailNoteModalStyled>
  );
}
