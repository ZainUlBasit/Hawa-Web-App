import React from "react";

const Input = ({
  Type,
  label,
  placeholder,
  required,
  Value,
  setValue,
  readonly,
}) => {
  console.log("readonly : ", readonly);
  return (
    <div className="relative mb-[15px] w-[297px] maxInputWidth font-[Quicksand]">
      <p className="absolute top-[-11px] left-3 bg-white h-fit w-fit text-[15px] font-bold InputLabel">
        {label}
      </p>
      <input
        type={Type ? Type : "text"}
        required={required}
        placeholder={placeholder}
        className="px-3 py-2 border border-gray-300 rounded-[7.94px] w-full outline-none InputText"
        value={Value}
        readOnly={readonly ? true : false}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
