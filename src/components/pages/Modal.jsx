import React, { useEffect, useRef } from "react";
import Button from "../Button";

const Modal = ({ isOpen, onClose, children }) => {
  const modal = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modal.current && !modal.current.contains(e.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    if (onClose) {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div
        ref={modal}
        className="bg-white p-6 rounded-md shadow-lg relative z-50"
      >
        <Button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-500 hover:text-gray-800 cursor-pointer"
        >
          X
        </Button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
