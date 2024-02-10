import styled from "styled-components";

export const CarouselWrapper = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100% !important;

  @media (max-width: 1300px) {
    flex-wrap: wrap;
    .text-wrapper {
      width: 100%;
      height: fit-content !important;
      & > div {
        width: 100%;
        height: fit-content !important;
        padding: 40px 20px;
        justify-content: center;
        align-items: center;
        & > div {
          width: fit-content !important;
          text-align: center;
        }
      }
    }
    .carousel-wrapper {
      width: 90% !important;
      /* padding-left: 30px; */
    }
  }
  @media (max-width: 400px) {
    flex-wrap: wrap;
    .text-wrapper {
    }
    .carousel-wrapper {
      width: 75% !important;
      /* padding-left: 30px; */
    }
  }
`;
export const CarouselWrapperHorizontal = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100% !important;

  @media (max-width: 1300px) {
    flex-wrap: wrap;
    .text-wrapper {
    }
    .carousel-wrapper {
      width: 90% !important;
      /* padding-left: 30px; */
    }
  }
  @media (max-width: 400px) {
    flex-wrap: wrap;
    .text-wrapper {
    }
    .carousel-wrapper {
      width: 75% !important;
      /* padding-left: 30px; */
    }
  }
`;
