import React from "react";

const Input = ({ label, type, ...props }) => {
  return <div className="flex">
    <label htmlFor={label} className="text-gray-500">{label}</label>
    <input name={label} type={type} {...props} />
  </div>
};

export default Input;
