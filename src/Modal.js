import React from "react";
import "./App.css";

const Modal = ({ card, onClose }) => {
  if (!card) return null;

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <img src={card.url} alt={card.title} />
        <h2>{card.title}</h2>
      </div>
    </div>
  );
};

export default Modal;
