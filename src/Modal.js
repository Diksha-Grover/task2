import React, { useState } from "react";
import "./App.css";

const Modal = ({ card, onClose }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  if (!card) return null;

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      onClose();
    }
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          X
        </button>

        {!isImageLoaded && <div className="loader"></div>}
        
        <img
          src={card.url}
          alt={card.title}
          onLoad={handleImageLoad}
          style={{ display: isImageLoaded ? "block" : "none" }}
        />

        {isImageLoaded && <h2>{card.title}</h2>}
      </div>
    </div>
  );
};

export default Modal;
