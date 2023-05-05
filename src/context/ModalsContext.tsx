import { createContext, ReactNode, useContext, useState } from "react";

interface Modal {
  id?: string;
  content?: ReactNode;
  onClose?: () => void;
  isClosing?: boolean;
}

interface ModalContextValue {
  modals?: Modal[];
  addModal?: (modal: Modal) => void;
  removeModal?: (modal: Modal) => void;
  removeAllModals?: () => void;
}

const ModalContext = createContext<ModalContextValue>({
  modals: [],
  addModal: () => {},
  removeModal: () => {},
  removeAllModals: () => {},
});

export const useModalContext = () => useContext(ModalContext);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modals, setModals] = useState<Modal[]>([]);

  const addModal = (modal: Modal) => {
    setModals([...modals, modal]);
  };

  const removeModal = (modal: Modal) => {
    setModals(modals.filter((m) => m.id !== modal.id));
  };

  const removeAllModals = () => {
    setModals([]);
  };

  return (
    <ModalContext.Provider
      value={{ modals, addModal, removeModal, removeAllModals }}
    >
      {children}
    </ModalContext.Provider>
  );
};
