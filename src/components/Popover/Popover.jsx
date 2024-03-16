import { Popover, Typography } from "@mui/material";
import React from "react";

const PopoverCustom = ({
  id,
  open,
  anchorEl,
  handleClose,
  setValue,
  CurrentCategory,
  Data,
}) => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      PaperProps={{
        sx: {
          borderRadius: "25px", // Add rounded corners
          backgroundColor: "white", // Set background color to white
          width: "300px", // Set the width as needed
          overflow: "hidden", // Hide overflowing content
        },
      }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Typography
        sx={{
          p: 2,
          borderColor: "#000",
          backgroundColor: "#000",
          width: "400px",
          overflow: "hidden",
          borderRadius: "25px",
        }}
      >
        <div className="bg-[#000] text-white font-[Quicksand]  flex flex-col justify-center items-center rounded-[50px]">
          <div className="w-full flex flex-col justify-between gap-2 items-start">
            {Data.map((data, i) => {
              return (
                <div
                  className="flex gap-x-3 items-center cursor-pointer"
                  onClick={() => {
                    handleClose();
                    setValue(data.title);
                  }}
                >
                  <input
                    type="checkbox"
                    className="mr-1 appearance-none h-5 w-5 border border-gray-300 checked:bg-white rounded-full"
                    checked={CurrentCategory === data.title}
                  />
                  <span>{data.title}</span>
                </div>
              );
            })}
            <div
              className="flex gap-x-3 items-center cursor-pointer"
              onClick={() => {
                handleClose();
                setValue("");
              }}
            >
              <input
                type="checkbox"
                className="mr-1 appearance-none h-5 w-5 border border-gray-300 checked:bg-white rounded-full"
                checked={false}
              />
              <span>Clear</span>
            </div>
          </div>
        </div>
      </Typography>
    </Popover>
  );
};

export default PopoverCustom;
