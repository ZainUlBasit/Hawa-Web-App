import React from "react";
import {
  HeaderMiddleBlock,
  HeaderWrapperCandidate,
  Overlay,
  OverlayB,
  OverlayC,
} from "../Wrapper/Home/HomeWrapper";
import EmployeeImage from "../../assets/employee.png";

const EmployeeHeader = () => {
  return (
    <HeaderWrapperCandidate className="fade-in">
      <OverlayC />
      <HeaderMiddleBlock>
        <span className="HeaderMiddleBlockText">
          <div className="flex gap-x-10 flex-wrap justify-center items-center gap-y-3">
            <span className="text-6xl">Employers</span>
            <div className="flex text-xl">
              We firmly focus on the future of our candidates,
              <br />
              our clients, and our industries.
            </div>
          </div>
        </span>
      </HeaderMiddleBlock>
      <div className="BgVideo">
        <div
          style={{
            width: "100%", // Set width as needed
            height: "100%", // Set height as needed
            backgroundImage: `url(${EmployeeImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </HeaderWrapperCandidate>
  );
};

export default EmployeeHeader;
