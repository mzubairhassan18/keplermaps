import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import PageHeader from "../PageHeader";
import Footer from "../Footer";
import styled from "styled-components";
import Website from "../../website";

const MyAccount = () => {
  const [activeComponent, setActiveComponent] = useState("login");
  const handleNav = (component) => {
    setActiveComponent(component);
  };

  return (
    <Website>
      <StyledAccountButtons>
        <StyledButton
          onClick={() => {
            handleNav("login");
          }}
          isActive={activeComponent == "login"}
        >
          Login
        </StyledButton>
        <StyledButton
          onClick={() => {
            handleNav("register");
          }}
          isActive={activeComponent == "register"}
        >
          Register
        </StyledButton>
      </StyledAccountButtons>
      <StyledAccountsComponents>
        {activeComponent == "login" ? <Login /> : <Signup />}
      </StyledAccountsComponents>
    </Website>
  );
};

const StyledAccountsComponents = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledAccountButtons = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0px;
  gap: 10px;
  font-family: "DMMonoFonts";
`;
const StyledButton = styled.button`
  font-family: "DMMonoFonts";
  background: none;
  border: none;
  font-size: 24px;
  border-bottom: ${(props) => (props.isActive ? "2px solid red" : "none")};
  padding: 10px 0px;
  cursor: pointer;
`;

export default MyAccount;
