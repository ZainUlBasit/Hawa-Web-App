import { Box, Modal } from "@mui/material";
import React from "react";

const ModalWrapper = ({ Open, setOpen, FullScreen, children }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const styleForFull = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw", // Take up full width of the viewport
    height: "100vh", // Take up full height of the viewport
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "scroll",
  };

  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={Open}
      //   onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={FullScreen ? styleForFull : style}>{children}</Box>
    </Modal>
  );
};

export default ModalWrapper;
