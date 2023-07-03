import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import styled from "styled-components";

const Signup = () => {
  return (
    <StyledContainer>
      <StyledInputContainer>
        <StyledLable>
          Username <StyledAsterik>*</StyledAsterik>
        </StyledLable>
        <StyledInput />
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledLable>
          Email address <StyledAsterik>*</StyledAsterik>
        </StyledLable>
        <StyledInput />
      </StyledInputContainer>
      <StyledInfo>
        A link to set a new password will be sent to your email address. Your
        personal data will be used to support your experience throughout this
        website, to manage access to your account, and for other purposes
        described in our privacy policy.
      </StyledInfo>
      <StyledLoginButton>Register </StyledLoginButton>
    </StyledContainer>
  );
};
const StyledContainer = styled.div`
  width: 500px;
  padding: 0 10px;
`;
const StyledInfo = styled.p``;
const StyledRememberMe = styled.div`
  display: flex;
`;
const StyledLoginButton = styled.button`
  border-radius: 5px;
  padding: 12px 25px;
  line-height: 1.5em;
  background-color: #011e51;
  color: #fff;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
`;

const StyledRememberMeLabel = styled.span``;
const StyledCheckBoxInput = styled.input``;
const LoginButton = styled.button``;
const StyledInputContainer = styled.div`
  margin: 20px 0px;
`;
const StyledLable = styled.label``;
const StyledAsterik = styled.span`
  color: red;
  font-weight: 700;
  font-size: 29px;
  border: 0 !important;
  text-decoration: none;
`;
const StyledInput = styled.input`
  border-color: #e0e0e0;
  background-color: #ffffff;
  border-width: 1px;
  border-style: solid;
  -webkit-appearance: none;
  font-weight: normal;
  transition: all ease-in-out 0.3s;
  font-size: 1em;
  border-radius: 5px;
  padding: 12px 15px;
  line-height: 1.5em;
  color: black;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  outline: 0;
`;

export default Signup;
