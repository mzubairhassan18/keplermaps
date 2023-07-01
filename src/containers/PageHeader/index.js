import React from "react";
import logo from "../../images/mbrsc.png";
import styled from "styled-components";

const PageHeader = () => {
  return (
    <StyledHeaderContainer>
      <StyledMenu>
        <StyledLogo src={logo} />

        <StyledList>
          <StyledListMenu>Services</StyledListMenu>
          <StyledListMenu>Data</StyledListMenu>
          <StyledListMenu>Cloud</StyledListMenu>
          <StyledListMenu>Pricing</StyledListMenu>
        </StyledList>
      </StyledMenu>
      <StyledMenu>
        <StyledButton id="login">Login</StyledButton>
        <StyledButton id="register">Sign Up</StyledButton>
      </StyledMenu>
    </StyledHeaderContainer>
  );
};

const StyledHeaderContainer = styled.div`
  display: block;
  display: flex;
  justify-content: space-between;
  font-family: "Roboto", Sans-serif;
  padding: 10px 5px;
`;
const StyledMenu = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`;
const StyledList = styled.ul`
  display: flex;
  gap: 38px;
  list-style: none;
  align-items: center;
`;
const StyledListMenu = styled.li`
  font-size: 24px;
  font-weight: 600;
  font-family: "Roboto", Sans-serif;
`;
const StyledLogo = styled.img`
  width: 140px;
`;
const StyledButton = styled.button`
  transition: all 0.3s ease;
  color: #011e51;
  font-weight: 600;
  font-size: 15px;
  line-height: 1.2;
  padding: 10px 25px;
  border-radius: 5px;
  background: none;
  &#login {
    border: none;
  }
  &#login:hover {
    border: 1px solid #011e51;
  }
  &#register {
    color: white;
    background: #011e51;
  }
  &#register:hover {
    background: none;
    color: #011e51;
  }
`;

export default PageHeader;
