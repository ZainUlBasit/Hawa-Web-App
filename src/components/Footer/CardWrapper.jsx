import React from "react";
import styled from "styled-components";

const StyledCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 2.5rem;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  /* width: 90%; */
  @media (max-width: 780px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const CardWrapper = ({ children }) => {
  return (
    <StyledCardWrapper>
      {children}
    </StyledCardWrapper>
  );
};

export default CardWrapper;
