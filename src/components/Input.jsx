import React from "react";

const Input = ({ label, type, ...props }) => {
  return <input name={label} type={type} {...props} />;
};

export default Input;
