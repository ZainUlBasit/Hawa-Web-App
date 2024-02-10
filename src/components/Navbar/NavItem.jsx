import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({
  title,
  link,
  activeNavItem,
  handleNavItemClick,
  scrolled,
}) => {
  console.log(scrolled);
  return (
    <div className="relative overflow-hidden py-[3px]">
      <Link
        to={link}
        className={`text-[1rem] font-[700] maxWeb1:text-[25px] maxWeb2:text-[30px] maxWeb3:text-[35px] maxWeb4:text-[40px] font-[Ubuntu] drop-shadow-lg ${
          false ? "text-black" : "text-white"
        }`}
        onClick={() => handleNavItemClick(title)}
      >
        {title}
      </Link>
      {activeNavItem === title && <div className={`box-below-link ${scrolled && "text-black bg-black"} ${true ? "!bg-white":"!bg-black"}`}></div>}
    </div>
  );
};

export default NavItem;
