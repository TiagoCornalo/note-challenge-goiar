import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateNote } from "@/redux/slices";
import toast from "react-hot-toast";
import { Note } from "@/models";
import { CustomSelectOption } from "@/hooks/useCreateNote";
import { useModalContext } from "@/context";

interface UpdateNoteForm {
  type?: string;
  title?: string;
  content?: string;
}

export default function useUpdateNote({
  selectedNote,
}: {
  selectedNote: Note | null;
}) {
  const dispatch = useDispatch();
  const [modalForm, setModalForm] = useState<UpdateNoteForm>({
    title: selectedNote?.title,
    content: selectedNote?.content,
    type: selectedNote?.type,
  });

  const { removeAllModals } = useModalContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setModalForm((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setModalForm((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleTypeChange = (selectedOption: any) => {
    const option = selectedOption as CustomSelectOption;
    if (option !== null) {
      setModalForm((prevValue: UpdateNoteForm) => ({
        ...prevValue,
        type: option.value as string,
      }));
    }
  };

  const handleUpdateNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!modalForm?.title?.trim() || !modalForm?.type?.trim())
      return toast.error("Debes completar el titulo y el tipo de nota");
    const updatedNote = {
      ...selectedNote,
      title: modalForm.title,
      content: modalForm.content,
      type: modalForm.type,
    };
    dispatch(updateNote(updatedNote));
    toast.success("Nota actualizada");
    removeAllModals?.();
  };

  return {
    handleInputChange,
    handleTextAreaChange,
    handleTypeChange,
    handleUpdateNote,
    modalForm,
  };
}
