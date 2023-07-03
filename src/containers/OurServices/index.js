import React from "react";
import styled from "styled-components";
import logo from "../../images/mbrsc_blank.png";
import serviceImage from "../../images/services_image.png";
import stateliteImage from "../../images/satelite.png";

const CheckSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="34"
    viewBox="0 0 40 34"
    fill="none"
  >
    <path
      d="M0 19.3926C3.63689 16.2199 7.17203 17.0572 12.0765 22.1381C14.4923 19.2872 16.7687 16.2768 19.3851 13.5826C24.8448 7.95768 31.5023 3.87358 38.3516 0.0913708C38.7586 -0.133625 39.4447 0.131243 40 0.168268C39.7703 0.712245 39.7006 1.45559 39.2877 1.77172C32.3948 7.08333 26.0688 12.9674 21.2312 20.1616C18.4752 24.2599 16.3006 28.7342 13.8498 33.0319C13.6492 33.3822 13.3469 33.6784 13.094 34.0002C12.7916 33.7354 12.3788 33.5275 12.2073 33.1971C9.33789 27.6833 5.48005 23.0239 0.130823 19.629C0.0639581 19.5863 0.0436078 19.4723 0 19.3926Z"
      fill="#38B705"
    ></path>
  </svg>
);

const OurServices = () => {
  return (
    <StyledContainer id="services">
      <StyledLeft>
        <StyledLogo>
          <img src={logo}></img>
        </StyledLogo>
        <StyledImage>
          <img src={stateliteImage} />
        </StyledImage>
        <StyledSideHeading>
          <StyledSideHeader>SATELLITE IMAGERY SERVICES</StyledSideHeader>
          <StyledSideText>
            MBRSC provides high-resolution satellite images for government and
            commercial use in various applications
          </StyledSideText>
          <StyledLearnMoreButton>Learn More</StyledLearnMoreButton>
        </StyledSideHeading>
      </StyledLeft>
      <StyledRight>
        <StyledHeader>OUR SERVICES</StyledHeader>
        <StyledServiceImage>
          <img src={serviceImage} />
        </StyledServiceImage>
        <StyledServicePoints>
          <StyledPoint>
            <CheckSvg /> <span>Neque porro quisquam est qui dolorem</span>
          </StyledPoint>
          <StyledPoint>
            <CheckSvg /> <span>Neque porro quisquam est qui dolorem</span>
          </StyledPoint>
          <StyledPoint>
            <CheckSvg /> <span>Neque porro quisquam est qui dolorem</span>
          </StyledPoint>
        </StyledServicePoints>
      </StyledRight>
    </StyledContainer>
  );
};
const StyledSideHeading = styled.div`
  padding: 5px 30px;
  font-family: Roboto, Sans-serif;
  display: flex;
  flex-direction: column;
  color: white;
  gap: 20px;
  margin-bottom: 20px;
`;

const StyledSideHeader = styled.h3`
  font-size: 45px;
`;
const StyledSideText = styled.p`
  font-size: 20px;
`;

const StyledLearnMoreButton = styled.button`
  font-family: "Roboto", Sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  background-color: #00b9ef;
  border-radius: 5px 5px 5px 5px;
  padding: 8px 73px 8px 53px;
  color: white;
  border: none;
`;

const StyledImage = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledServicePoints = styled.ul`
  list-style: none;
`;
const StyledPoint = styled.li`
  display: flex;
  gap: 10px;
  font-size: 20px;
  font-family: Roboto, Sans-serif;
  margin-top: 32px;
`;

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const StyledServiceImage = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 0 18px;
    margin-top: 0rem;
    > img {
      width: 100%;
    }
  }
`;

const StyledLeft = styled.div`
  background: url("https://www.sensei.com.pk/wp-content/uploads/2023/06/left-removebg-preview.png");
  background-size: cover;
`;
const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;

  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;
const StyledHeader = styled.h2`
  display: flex;
  justify-content: center;
  color: #ffffff;
  font-family: "Roboto", Sans-serif;
  font-size: 56px;
  font-weight: 500;
  line-height: 58px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 40px;
    margin-top: 5px;
  }
`;
const StyledRight = styled.div`
  background: url("https://www.sensei.com.pk/wp-content/uploads/2023/06/right.png");
  background-size: cover;
`;

export default OurServices;
