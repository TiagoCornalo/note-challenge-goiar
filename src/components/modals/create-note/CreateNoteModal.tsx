import { useCreateNote } from "@/hooks";
import { Input } from "@/components/inputs";
import Select from "react-select";
import { CreateNoteModalStyled } from "@/components/modals/create-note";

export default function CreateNoteModal() {
  const {
    handleInputChange,
    handleTypeChange,
    handleCreateNote,
    modalForm,
    types,
  } = useCreateNote();

  return (
    <CreateNoteModalStyled>
      <form onSubmit={handleCreateNote}>
        <Input
          name={"title"}
          type={"text"}
          onChange={handleInputChange}
          value={modalForm.title}
          placeholder={"Título de la nota"}
        ></Input>
        <Select options={types} onChange={(e: any) => handleTypeChange(e)} />
      </form>
    </CreateNoteModalStyled>
  );
}
