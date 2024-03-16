import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import NavItem from "./NavItem";
import { NavData } from "../../assets/NavData";
import NavLogoBlack from "../../assets/logoblack.png";
import NavLogoWhite from "../../assets/logowhite.png";
import { FaBars } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";
import { LiaCrossSolid } from "react-icons/lia";
import { ImCross } from "react-icons/im";
import SwipeableTemporaryDrawer from "./SideMenu";
import SendResume from "../Modals/SendResume";

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [DrawerOpen, setDrawerOpen] = useState(false);

  const [OpenModal, setOpenModal] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    NavData.map((dt) => {
      if (dt.link === pathname) handleNavItemClick(dt.title);
    });
    if ("/register" === pathname) handleNavItemClick("Register");
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  return (
    <>
      <div
        className={`!z-20 w-full ${
          scrolled
            ? "fixed bg-[#000] h-[15vh]"
            : "bg-transparent absolute h-[15vh]"
        } transition-all ease-in-out duration-1000 flex justify-center z-10`}
      >
        <div className="w-[90%]  maxWeb1:max-w-[1900px] maxWeb2:max-w-[2500px] maxWeb3:max-w-[3800px] maxWeb4:max-w-[3400px] flex justify-between items-center z-100">
          {/* Left side Logo */}
          <Link
            to={"/"}
            onClick={() => handleNavItemClick("HOME")}
            className="flex items-center gap-x-2"
          >
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/logos%2Flogo.png?alt=media&token=a005801c-85bb-40b9-9593-e9fc4f6ffb20"
              }
              className="h-[10vh] maxWeb1:h-[120px]  maxWeb2:h-[200px] maxWeb3:h-[250px] maxWeb4:h-[220px] w-fit"
            />
            <img
              src={false ? NavLogoBlack : NavLogoWhite}
              className="h-[6vh] maxWeb1:h-[120px]  maxWeb2:h-[200px] maxWeb3:h-[250px] maxWeb4:h-[220px] w-fit Logo2"
            />
          </Link>
          {/* Middle Nav Items */}
          <nav className="max1200:hidden flex items-center justify-between font-[Ubuntu] gap-x-7 z-100">
            {NavData.map((data) => (
              <NavItem
                scrolled={scrolled}
                key={data.title}
                title={data.title}
                link={data.link}
                activeNavItem={activeNavItem}
                handleNavItemClick={handleNavItemClick}
              />
            ))}
            <button
              className={`relative text-center tracking-[1px] no-underline ${
                activeNavItem === "Register"
                  ? "text-[#fff] bg-[#F17020]"
                  : "text-[#F17020] bg-[#fff]"
              } cursor-pointer transition-all ease-in-out duration-500 py-2 px-3 rounded-[10px] border-2 border-solid border-[#F17020] hover:text-[white] shadow-[inset_0_0_0_0_#F17020] hover:shadow-[inset_0_-100px_0_0_#F17020] active:scale-90  flex items-center justify-center font-[Ubuntu] text-[1rem] font-[700]`}
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Send Resume
            </button>
          </nav>
          <div className="min1300:hidden">
            {!DrawerOpen ? (
              <FaBarsProgress
                className="text-white text-4xl cursor-pointer"
                onClick={() => setDrawerOpen(true)}
              />
            ) : (
              <ImCross
                className="text-white text-3xl cursor-pointer"
                onClick={() => setDrawerOpen(false)}
              />
            )}
          </div>
        </div>
      </div>
      <SwipeableTemporaryDrawer open={DrawerOpen} setOpen={setDrawerOpen} />
      {OpenModal && (
        <SendResume open={OpenModal} setOpen={setOpenModal} FullScreen={true} />
      )}
    </>
  );
};

export default Navbar;
