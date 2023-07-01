import React from "react";
import styled from "styled-components";

const ConnectHeader = (props) => {
  console.log("props", props);
  return (
    <StyledContainer>
      <StyledHeader>
        Join the millions of users worldwide trusting MBRSC every day
      </StyledHeader>
      <StyledButton>CONNECT WITH MBRSC</StyledButton>
    </StyledContainer>
  );
};

const StyledHeader = styled.h2`
  color: #011e51;
  font-size: 26px;
  font-family: Roboto, Sans-serif;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 30px;
  background: #f0f0f0;
  margin: 10px 0px;
  gap: 2rem;
  align-items: center;
`;
const StyledButton = styled.button`
  color: white;
  background-color: #011e51;
  font-size: 20px;
  padding: 5px 55px;
  border-radius: 20px;
  font-weight: bold;
  height: 50px;
`;

export default ConnectHeader;
