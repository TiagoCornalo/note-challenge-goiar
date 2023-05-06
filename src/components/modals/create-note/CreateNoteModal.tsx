import { useCreateNote } from "@/hooks";
import { Input } from "@/components/inputs";
import Select from "react-select";
import {
  CreateNoteForm,
  CreateNoteModalStyled,
} from "@/components/modals/create-note";
import { TextArea, TitleStyled } from "@/styled-components";
import { Button } from "@/components/buttons";
import { types } from "@/models";

export default function CreateNoteModal() {
  const {
    handleInputChange,
    handleTypeChange,
    handleCreateNote,
    modalForm,
    handleTextAreaChange,
  } = useCreateNote();

  return (
    <CreateNoteModalStyled>
      <TitleStyled size={"24px"}>Crear nueva nota</TitleStyled>
      <CreateNoteForm onSubmit={handleCreateNote}>
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
          placeholder={"Selecciona un tipo de nota"}
        />
        <TextArea
          placeholder={"Contenido de la nota"}
          rows={5}
          name={"content"}
          value={modalForm.content}
          onChange={handleTextAreaChange}
        />
        <Button
          onClick={() => handleCreateNote}
          type={"submit"}
          margin={"20px 0"}
        >
          Crear nota
        </Button>
      </CreateNoteForm>
    </CreateNoteModalStyled>
  );
}
