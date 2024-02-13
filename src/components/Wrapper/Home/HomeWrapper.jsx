import styled from "styled-components";

export const HeaderWrapperCandidate = styled.div`
  display: flex;
  overflow: hidden;
  padding: 0;
  margin: 0;
  justify-content: start;
  align-items: start;
  width: 100%;
  height: 50vh;
  position: relative;
  width: 100%;
  overflow: hidden;
  .BgVideo {
    position: relative;
    width: 100%;
    height: 50vh;
    overflow: hidden;
    video {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 100%;
      min-height: 50%;
      width: auto;
      height: auto;
      z-index: -1;
      object-fit: cover;
    }
  }
`;
export const HeaderWrapper = styled.div`
  display: flex;
  overflow: hidden;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .BgVideo {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    video {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      z-index: -1;
      object-fit: cover;
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.48);
`;
export const OverlayB = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  background: rgba(0, 0, 0, 0.48);
`;
export const OverlayC= styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  background: rgba(0, 0, 0, 0.6);
`;

export const HeaderMiddleBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 2px 2px 30px var(--tw-shadow-color);
  box-shadow: 0 0 0 1px #000;
  .HeaderMiddleBlockText {
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: #fff;
    font-size: 3rem;
    font-weight: bold;
    filter: drop-shadow(0 0 100px);
    text-shadow: 0 0 0 1px #f17020;
    z-index: 9;
    width: fit-content;
    text-align: center;
    flex-direction: column;
    font-family: "Open Sans";
    .ChangingText {
      color: #f17020;
      font-size: 3rem;
      text-transform: capitalize;
    }
    .fade-in {
      opacity: 1;
      transition: opacity 1s ease-in-out;
    }
    .fade-out {
      opacity: 0;
      transition: opacity 1s ease-in-out;
    }
  }
`;
