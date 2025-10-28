import React from "react";
import "./Modal.css";

export default function Modal({ visible, title, message, primary = "OK", onPrimary, onClose }) {
  if (!visible) return null;

  const handleBackground = (e) => {
    if (e.target === e.currentTarget && onClose) onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleBackground} role="dialog" aria-modal="true">
      <div className="modal-card">
        {title && <h3 className="modal-title">{title}</h3>}
        {message && <div className="modal-message">{message}</div>}

        <div className="modal-actions">
          {onClose && (
            <button className="modal-btn ghost" onClick={onClose} aria-label="Close">Close</button>
          )}
          {onPrimary && (
            <button className="modal-btn primary" onClick={onPrimary} aria-label="OK">{primary}</button>
          )}
        </div>
      </div>
    </div>
  );
}
