import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalContainer, ModalWrapper } from "@/styled-components";
interface ModalProps {
  children?: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps): JSX.Element {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#modal-wrapper")) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return createPortal(
    <ModalContainer>
      <ModalWrapper id="modal-wrapper">{children}</ModalWrapper>
    </ModalContainer>,
    document.body
  );
}
