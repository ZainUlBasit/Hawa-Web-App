import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { IconButton, TextField } from "@mui/material";
import { FaRegWindowClose } from "react-icons/fa";
import Button from "../Buttons/Button";
import { storage } from "../../config/firebase";
import { ref } from "firebase/storage";

const SendResume = ({ open, setOpen, FullScreen }) => {
  const [Name, setName] = useState(""); // Initialize state for the input field data
  const [Qualification, setQualification] = useState(""); // Initialize state for the input field data
  const [PostForApply, setPostForApply] = useState(""); // Initialize state for the input field data
  const [YourIndustry, setYourIndustry] = useState(""); // Initialize state for the input field data
  const [TotalExperience, setTotalExperience] = useState(""); // Initialize state for the input field data
  const [TotalExperienceOut, setTotalExperienceOut] = useState(""); // Initialize state for the input field data
  const [CurrentDate, setCurrentDate] = useState(""); // Initialize state for the input field data
  const [PostNo, setPostNo] = useState(""); // Initialize state for the input field data
  const [Email, setEmail] = useState(""); // Initialize state for the input field data
  const [MobileNo, setMobileNo] = useState(""); // Initialize state for the input field data
  const [Message, setMessage] = useState(""); // Initialize state for the input field data
  const [Resume, setResume] = useState(""); // Initialize state for the input field data

  const onSubmit = async () => {
    return;
    const imageRef = storage.ref(`/resumes/${Name}`);
    try {
      const snapshot = await imageRef.put(selectedFile);
      const downloadURL = await snapshot.ref.getDownloadURL();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ModalWrapper Open={open} setOpen={setOpen} FullScreen={FullScreen}>
      <IconButton
        style={{ position: "absolute", top: 10, right: 20 }}
        onClick={() => setOpen(false)}
      >
        <FaRegWindowClose className="text-[#FF8D00] text-4xl hover:text-[red]" />
      </IconButton>
      <div className="flex items-start px-[60px] gap-x-[50px] h-full  py-5">
        <div className="flex flex-col w-[500px] h-full justify-center">
          <span className="text-7xl flex flex-col">
            <span className="!text-[6rem] font-bold">Send </span>Résumé.
          </span>
          <span className="text-xl">
            Submit your resume and we will get back to you with a suitable job
            for you.
            <br />
            <span className="font-bold underline">HR@hawaoverseas.com</span>
          </span>
        </div>
        <div className="w-fit flex flex-col gap-y-3">
          <TextField
            id="filled-search"
            label="Name"
            type="text"
            variant="filled"
            sx={{ width: 400 }}
            value={Name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            id="filled-search"
            label="Qualification"
            type="text"
            variant="filled"
            sx={{ width: 400 }}
            value={Qualification}
            onChange={(event) => setQualification(event.target.value)}
          />
          <TextField
            id="filled-search"
            label="Post Applying For..."
            type="text"
            variant="filled"
            sx={{ width: 400 }}
            value={PostForApply}
            onChange={(event) => setPostForApply(event.target.value)}
          />
          <TextField
            id="filled-search"
            label="Your Industry"
            type="text"
            variant="filled"
            sx={{ width: 400 }}
            value={YourIndustry}
            onChange={(event) => setYourIndustry(event.target.value)}
          />
          <TextField
            id="filled-search"
            label="Total Experience"
            type="text"
            variant="filled"
            sx={{ width: 400 }}
            value={TotalExperience}
            onChange={(event) => setTotalExperience(event.target.value)}
          />
          <TextField
            id="filled-search"
            label="Total Experience Out Of Saudia"
            type="text"
            variant="filled"
            sx={{ width: 400 }}
            value={TotalExperienceOut}
            onChange={(event) => setTotalExperienceOut(event.target.value)}
          />
          <TextField
            id="filled-search"
            // label="Qualification"
            type="date"
            variant="filled"
            sx={{ width: 400 }}
            value={CurrentDate}
            onChange={(event) => setCurrentDate(event.target.value)}
          />
          <TextField
            id="filled-search"
            label="Passport No"
            type="text"
            variant="filled"
            sx={{ width: 400 }}
            value={PostNo}
            onChange={(event) => setPostNo(event.target.value)}
          />
          <TextField
            id="filled-search"
            label="Email"
            type="text"
            variant="filled"
            sx={{ width: 400 }}
            value={Email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            id="filled-search"
            label="Mobile Number"
            type="text"
            variant="filled"
            sx={{ width: 400 }}
            value={MobileNo}
            onChange={(event) => setMobileNo(event.target.value)}
          />
          <TextField
            id="filled-search"
            label="Message"
            type="text"
            variant="filled"
            sx={{ width: 400 }}
            value={Message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <input
            type="file"
            value={Resume}
            onChange={(event) => setResume(event.target.files[0])}
            className="my-4"
          />
          <Button title={"Submit"} Width={"w-[400px]"} onClick={onSubmit} />
        </div>
      </div>
    </ModalWrapper>
  );
};

export default SendResume;
