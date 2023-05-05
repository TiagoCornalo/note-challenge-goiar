import { useState } from "react";
import { useModalContext } from "@/context";
import { useDispatch } from "react-redux";
export default function CreateNoteModal() {
  const { addModal } = useModalContext();
  const dispatch = useDispatch();
  const [modalForm, setModalForm] = useState({
    title: "",
    content: "",
    type: "",
  });
}
