import { useEffect } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { ModalOverlay, ModalWindow } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ closeModal, modalImg }) {
  const { img, tags, id } = modalImg;

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      closeModal();
    }
  };

  const backDropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <ModalOverlay onClick={backDropClick}>
      <ModalWindow>
        <img src={img} alt={tags} key={id} />
      </ModalWindow>
    </ModalOverlay>,
    modalRoot
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalImg: PropTypes.object.isRequired,
};
