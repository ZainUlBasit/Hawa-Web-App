import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { LiaInboxSolid } from "react-icons/lia";
import { MdAllInbox, MdMail, MdClose } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { NavData } from "../../assets/NavData";
import NavLogoWhite from "../../assets/logowhite.png";
import { useNavigate } from "react-router-dom";

export default function SwipeableTemporaryDrawer({ open, setOpen }) {
  const navigate = useNavigate();
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const list = () => (
    <Box
      sx={{
        width: 300,
        backgroundColor: "black",
        height: "100%",
        px: 2,
        py: 3,
      }}
      role="presentation"
    >
      <div className="py-4 mb-5">
        <img src={NavLogoWhite} alt="not found" />
      </div>
      {NavData.map((data, index) => (
        <ListItem key={data.title} disablePadding>
          <ListItemButton
            onClick={() => {
              navigate(data.link);
              toggleDrawer(false);
            }}
          >
            <div
              className="text-white text-[1.3rem] font-bold hover:text-[#F17020] transition-all duration-700 ease-in-out"
              style={{ fontFamily: "Open Sans" }}
            >
              {data.title}
            </div>
          </ListItemButton>
        </ListItem>
      ))}
    </Box>
  );

  return (
    <SwipeableDrawer
      anchor={"right"}
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      {list()}
      <Button
        onClick={toggleDrawer(false)}
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          zIndex: 1,
        }}
      >
        <ImCross className="text-white font-bold" size={20} />
      </Button>
    </SwipeableDrawer>
  );
}
