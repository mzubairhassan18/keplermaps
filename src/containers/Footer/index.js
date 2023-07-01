import React from "react";
import logo from "../../images/mbrsc_blank.png";
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
} from "react-icons/ai";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledContainer>
      <StyledLogoContainer>
        <StyledLogo>
          <img src={logo} />
        </StyledLogo>
        <StyledSocial>
          <AiOutlineFacebook />
          <AiOutlineLinkedin />
          <AiOutlineWhatsApp />
          <AiOutlineYoutube />
        </StyledSocial>
      </StyledLogoContainer>
      <StyledFooterLinks>
        <StyledHeading>About</StyledHeading>
        <StyledDescription>
          Most reliable products and long term support
        </StyledDescription>
        <StyledBorder />
        <StyledLinks>
          <StyledListItem>Services</StyledListItem>
          <StyledListItem>Data</StyledListItem>
          <StyledListItem>Cloud</StyledListItem>
          <StyledListItem>Pricing</StyledListItem>
        </StyledLinks>
      </StyledFooterLinks>
      <StyledFooterLinks>
        <StyledHeading>About</StyledHeading>
        <StyledDescription>
          Most reliable products and long term support
        </StyledDescription>
        <StyledBorder />
        <StyledLinks>
          <StyledListItem>Services</StyledListItem>
          <StyledListItem>Data</StyledListItem>
          <StyledListItem>Cloud</StyledListItem>
          <StyledListItem>Pricing</StyledListItem>
        </StyledLinks>
      </StyledFooterLinks>
      <StyledFooterLinks>
        <StyledHeading>About</StyledHeading>
        <StyledDescription>
          Most reliable products and long term support
        </StyledDescription>
        <StyledBorder />
        <StyledLinks>
          <StyledListItem>Services</StyledListItem>
          <StyledListItem>Data</StyledListItem>
          <StyledListItem>Cloud</StyledListItem>
          <StyledListItem>Pricing</StyledListItem>
        </StyledLinks>
      </StyledFooterLinks>
      <StyledFooterLinks>
        <StyledHeading>About</StyledHeading>
        <StyledDescription>
          Most reliable products and long term support
        </StyledDescription>
        <StyledBorder />
        <StyledLinks>
          <StyledListItem>Services</StyledListItem>
          <StyledListItem>Data</StyledListItem>
          <StyledListItem>Cloud</StyledListItem>
          <StyledListItem>Pricing</StyledListItem>
        </StyledLinks>
      </StyledFooterLinks>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  background: #001e37;
  margin-top: 50px;
  justify-content: space-around;
  padding: 20px 0px;
  color: white;
`;
const StyledSocial = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  font-size: 25px;
  margin-top: 29px;
`;
const StyledLogoContainer = styled.div``;
const StyledLogo = styled.div``;
const StyledFooterLinks = styled.div``;
const StyledHeading = styled.h3``;
const StyledDescription = styled.p`
  color: #898989;
  margin: 0;
  font-size: 9px;
`;
const StyledBorder = styled.hr`
  height: 1.5px;
  background: #00b9ef;
  border: none;
`;
const StyledLinks = styled.ul`
  color: #898989;
  list-style: none;
  padding: 0;
`;
const StyledListItem = styled.li`
  margin: 10px 0;
  letter-spacing: 1.2px;
  font-size: 12px;
`;

export default Footer;
