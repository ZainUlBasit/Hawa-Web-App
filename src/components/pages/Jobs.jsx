import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import backgroundImage from "../../assets/team.jpg";
import { OverlayB } from "../Wrapper/Home/HomeWrapper";
import { BsSearch } from "react-icons/bs";
import Input from "../Input";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import AuthInputPopOver from "../Popover/AuthInputPopOver";
import PopoverCustom from "../Popover/Popover";
import JobsCard from "../Card/JobsCard";
import JobCard from "../Card/JobCard";
import Footer from "../Footer/Footer";
import ReactLogo from '../../assets/candidates.svg';
const Jobs = () => {
  const [SearchText, setSearchText] = useState("");
  const [Category, setCategory] = React.useState("");
  const [Type, setType] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [anchorEl1, setAnchorEl1] = useState(null);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const open1 = Boolean(anchorEl1);
  const id1 = open1 ? "simple-popover" : undefined;

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const [minValue, setMinValue] = useState(3000);
  const [maxValue, setMaxValue] = useState(150000);

  const handleMinChange = (event) => {
    setMinValue(parseInt(event.target.value, 10));
  };

  const handleMaxChange = (event) => {
    setMaxValue(parseInt(event.target.value, 10));
  };

  return (
    <>
      <Navbar />
      <div
        className="h-[50vh] flex justify-start items-end"
        style={{
          fontFamily: "Open Sans",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <OverlayB />
        <div className="text-center font-bold text-[4rem] py-10 text-white z-10 px-10">
          Latest Jobs
        </div>
      </div>
      <div className="flex justify-center items-start w-[90%] h-fit">
        <div className="flex flex-col shadow-lg shadow-black w-fit px-10 py-10 gap-y-4 m-10 border-[.5px] rounded-[5px]">
          <Input
            label={"Search keyword"}
            placeholder={"e.g. Hire Controller"}
            Value={SearchText}
            setValue={setSearchText}
            required={false}
          />
          <Input
            label={"Location"}
            placeholder={"e.g. Bristol"}
            Value={SearchText}
            setValue={setSearchText}
            required={false}
          />

          <AuthInputPopOver
            label={"Job Categories"}
            placeholder={"Select Category..."}
            Value={Category}
            onClick={(data) => handleClick(data)}
          />

          <AuthInputPopOver
            label={"Job Type"}
            placeholder={"Select Type..."}
            Value={Type}
            onClick={(data) => handleClick1(data)}
          />
          <div className="flex flex-col w-[297px] gap-y-2">
            <h1 className="font-bold text-lg">Salary Range</h1>
            <label htmlFor="minRange">Min:{minValue}</label>
            <input
              type="range"
              id="minRange"
              name="minRange"
              min={1000}
              max={100000}
              step={1000}
              value={minValue}
              onChange={handleMinChange}
            />
            <label htmlFor="maxRange">Max:{maxValue}</label>
            <input
              type="range"
              id="maxRange"
              name="maxRange"
              min={10000}
              max={200000}
              step={1000}
              value={maxValue}
              onChange={handleMaxChange}
            />
          </div>

          {/* Popover */}
          <PopoverCustom
            id={id}
            open={open}
            anchorEl={anchorEl}
            handleClose={handleClose}
            setValue={setCategory}
            CurrentCategory={Category}
            Data={[
              { title: "Engineers" },
              { title: "Hire Controllers" },
              { title: "Operations" },
              { title: "Sales" },
            ]}
          />
          <PopoverCustom
            id={id1}
            open={open1}
            anchorEl={anchorEl1}
            handleClose={handleClose1}
            setValue={setType}
            CurrentCategory={Type}
            Data={[
              { title: "Contract" },
              { title: "Permanent" },
              { title: "Temporary" },
            ]}
          />
        </div>
        <div>
          <div className="flex my-5 mt-10 font-bold text-4xl">
            14 jobs available
          </div>
          <div className="flex items-center justify-between gap-10 flex-row flex-wrap m-5">
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
        </div>
      </div>
      <img src={ReactLogo} alt="React Logo" />
      <Footer />
    </>
  );
};

export default Jobs;
