import React from "react";

const Button = ({ title, Width }) => {
  return (
    <button
      className={`relative text-center tracking-[1px] no-underline text-[#FF8D00] cursor-pointer transition-all ease-in-out duration-500 py-2.5 rounded-[10px] border-2 border-solid border-[#FF8D00] hover:text-[#111922] shadow-[inset_0_0_0_0_#FF8D00] hover:shadow-[inset_0_-100px_0_0_#FF8D00] active:scale-90 flex items-center gap-x-2 justify-center text-[1rem] font-bold font-[Ubuntu] ${
        Width ? Width : ""
      }`}
    >
      <span>{title}</span>
    </button>
  );
};

export default Button;
