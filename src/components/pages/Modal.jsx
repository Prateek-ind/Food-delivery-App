import React, { useEffect, useRef } from "react";
import Button from "../Button";
import { assets } from "../../../assets/frontend_assets/assets";

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
        <img
          src={assets.cross_icon}
          className="absolute top-4 right-4 cursor-pointer hover:scale-105 object-contain "
          onClick={onClose}
          alt=""
        />

        {children}
      </div>
    </div>
  );
};

export default Modal;
