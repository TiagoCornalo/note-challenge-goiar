import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModalContext } from "@/context";
import { addNote } from "@/redux/slices";
import toast from "react-hot-toast";
import { Note } from "@/models";

interface ModalForm {
  type: string;
  title: string;
  content?: string;
}

export interface SelectOption {
  value: string;
  label: string;
}
export type CustomSelectOption = {
  value?: string;
  label?: string;
} | null;

interface CreateNoteEvents {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTypeChange: (e: { value: string }) => void;
  handleCreateNote: (e: React.FormEvent<HTMLFormElement>) => void;
  modalForm: ModalForm;
  types: SelectOption[];
}

export default function useCreateNote(): CreateNoteEvents {
  const { removeModal } = useModalContext();
  const dispatch = useDispatch();
  const [modalForm, setModalForm] = useState<ModalForm>({
    title: "",
    content: "",
    type: "",
  });

  const types: SelectOption[] = [
    { value: "Tareas de casa", label: "Tareas de casa" },
    { value: "Tareas del trabajo", label: "Tareas del trabajo" },
    { value: "Ideas nuevas", label: "Ideas nuevas" },
    { value: "Diario personal", label: "Diario personal" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setModalForm((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleTypeChange = (selectedOption: any) => {
    const option = selectedOption as CustomSelectOption;
    if (option !== null) {
      setModalForm((prevValue: ModalForm) => ({
        ...prevValue,
        type: option.value as string,
      }));
    }
  };

  const handleCreateNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!modalForm.title.trim() || !modalForm.type.trim())
      return toast.error("Debes completar el titulo y el tipo de nota");
    const newNote: Note = {
      ...modalForm,
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      content: modalForm?.content?.trim(),
      title: modalForm.title.trim(),
      type: modalForm.type.trim(),
    };
    dispatch(addNote(newNote));
    toast.success("Nota creada con éxito");
    if (removeModal) {
      removeModal({ id: "create-note" });
    }
  };

  return {
    handleInputChange,
    handleTypeChange,
    handleCreateNote,
    modalForm,
    types,
  };
}
