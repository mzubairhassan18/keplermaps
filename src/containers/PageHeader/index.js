import React, { useState } from "react";
import logo from "../../images/mbrsc.png";
import styled from "styled-components";
import { Link } from "react-router";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const PageHeader = () => {
  const [open, setOpen] = useState(false);
  const scrollToSection = () => {
    const section = document.getElementById("services");
    section.scrollIntoView({ behavior: "smooth" });
  };
  const handleMenuToggle = () => {
    console.log(open);
    setOpen(!open);
  };
  return (
    <StyledHeaderContainer>
      <Link to="/">
        <StyledLogo src={logo} />
      </Link>
      <StyledMenu>
        <StyledMenuIcon
          onClick={() => {
            handleMenuToggle();
          }}
        >
          {open ? <RxCross2 /> : <RxHamburgerMenu />} Menu
        </StyledMenuIcon>
        <StyledList show={open}>
          <StyledListMenu onClick={scrollToSection}>Services</StyledListMenu>
          <StyledListMenu>
            <Link to="/data">Data</Link>
          </StyledListMenu>
          <StyledListMenu>
            <Link to="/cloud">Cloud</Link>
          </StyledListMenu>
          <StyledListMenu>
            <Link to="/pricing">Pricing</Link>
          </StyledListMenu>
        </StyledList>
        <StyledHeaderButtons>
          <StyledButton id="login" to="/my-account">
            Login
          </StyledButton>
          <StyledButton id="register" to="/my-account">
            Sign Up
          </StyledButton>
        </StyledHeaderButtons>
      </StyledMenu>
    </StyledHeaderContainer>
  );
};

const StyledMenuIcon = styled.button`
  background: #011e51;
  padding: 10px;
  color: white;
  display: flex;
  gap: 7px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;
const StyledHeaderButtons = styled.div``;

const StyledHeaderContainer = styled.div`
  display: block;
  display: flex;
  justify-content: flex-start;
  font-family: "Roboto", Sans-serif;
  padding: 10px 5px;
`;
const StyledMenu = styled.div`
  flex: 1;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const StyledList = styled.ul`
  display: flex;
  gap: 38px;
  list-style: none;
  align-items: center;
  @media (max-width: 768px) {
    display: ${(props) => (props.show ? "flex" : "none")};
    flex-direction: column;
    gap: 10px;
    position: absolute;
    padding: 10px;
    top: 55px;
    background: white;
    left: -17px;
    border-radius: 5px;
    z-index: 999;
  }
`;
const StyledListMenu = styled.li`
  font-size: 24px;
  font-weight: 600;
  font-family: "Roboto", Sans-serif;
  cursor: pointer;
  > a {
    color: black;
    text-decoration: none;
  }
`;
const StyledLogo = styled.img`
  width: 246px;
`;
const StyledButton = styled(Link)`
  transition: all 0.3s ease;
  color: #011e51;
  font-weight: 600;
  font-size: 15px;
  line-height: 1.2;
  padding: 10px 25px;
  border-radius: 5px;
  background: none;
  border: 1px solid transparent;
  cursor: pointer;

  &#login:hover {
    border: 1px solid #011e51;
  }
  &#register {
    color: white;
    background: #011e51;
    margin-left: 5px;
    @media (max-width: 768px) {
      display: none;
    }
  }
  &#register:hover {
    background: none;
    color: #011e51;
  }
`;

export default PageHeader;
