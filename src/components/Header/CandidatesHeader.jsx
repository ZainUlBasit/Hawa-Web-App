import React from "react";
import {
  HeaderMiddleBlock,
  HeaderWrapperCandidate,
  Overlay,
  OverlayB,
  OverlayC,
} from "../Wrapper/Home/HomeWrapper";

const CandidatesHeader = () => {
  return (
    <HeaderWrapperCandidate>
      <OverlayC />
      <HeaderMiddleBlock>
        <span className="HeaderMiddleBlockText">
          Looking for work? <br /> You’ve come to the right place
        </span>
      </HeaderMiddleBlock>
      <div className="BgVideo">
        <video autoPlay muted loop playsInline>
          <source
            src={
              "https://firebasestorage.googleapis.com/v0/b/hawa-oversease.appspot.com/o/HomeBg22.mp4?alt=media&token=1072d27e-3795-466c-b640-7a3228d04b45"
            }
            type="video/mp4"
            muted={true}
          />
          Your browser does not support the video tag.
        </video>
        {/* Your other content goes here */}
      </div>
    </HeaderWrapperCandidate>
  );
};

export default CandidatesHeader;
