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
      <StyledLogo>
        <img src={logo} />
      </StyledLogo>
      <StyledQuickLinks>
        <h3>Quick Links</h3>
        <StyledLinks>
          <StyledLink>Services</StyledLink>
          <StyledLink>Data</StyledLink>
          <StyledLink>Cloud</StyledLink>
          <StyledLink>Pricing</StyledLink>
        </StyledLinks>
      </StyledQuickLinks>
      <StyledSocialLinks>
        <AiOutlineFacebook />
        <AiOutlineLinkedin />
        <AiOutlineWhatsApp />
        <AiOutlineYoutube />
      </StyledSocialLinks>
    </StyledContainer>
  );
};

const StyledSocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    gap: 30px;
    font-size: 25px;
  }
`;
const StyledLink = styled.li`
  color: #9e9e9e;
`;
const StyledLinks = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  gap: 70px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    gap: 35px;
    padding-bottom: 20px;
  }
`;
const StyledQuickLinks = styled.div``;
const StyledLogo = styled.div``;
const StyledContainer = styled.div`
  background: #011e51;
  display: flex;
  justify-content: space-around;
  padding: 37px 0px;
  margin-top: 30px;
  color: white;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    gap: 30px;
  }
`;

export default Footer;
