
import React from 'react';

const Modal = ({ showModal, handleClose, children }) => {
  if (!showModal) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <button className="close-button" onClick={handleClose}>✕</button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
