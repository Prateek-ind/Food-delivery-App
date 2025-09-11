import React from "react";

const Input = ({ name, type, }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={name} className="text-gray-800">
        {name}
      </label>
      <input name={name} type={type}  required className="border border-gray-500 outline-none rounded-xl px-4 py-2 " />
    </div>
  );
};

export default Input;
