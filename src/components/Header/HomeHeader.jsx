import React from "react";
import { HeaderWrapper, Overlay } from "../Wrapper/Home/HomeWrapper";

const HomeHeader = ({ children, Src }) => {
  return (
    <HeaderWrapper className="fade-in">
      <Overlay />
      {children}
      <div className="BgVideo">
        <video autoPlay muted loop playsInline>
          <source src={Src} type="video/mp4" muted={true} />
          Your browser does not support the video tag.
        </video>
        {/* Your other content goes here */}
      </div>
    </HeaderWrapper>
  );
};

export default HomeHeader;
