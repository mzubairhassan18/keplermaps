import React from "react";
import explore from "../../images/explore.png";
import styled from "styled-components";

import BackImage from "../../images/blueback.png";

const ExploreMore = () => {
  return (
    <StyledContainerOuter>
      <StyledContainer>
        <StyledLeft>
          <StyledHeading>Explore More</StyledHeading>
          <StyledText>
            about our Imaging and Data Analysis Services EXPLORE MORE
          </StyledText>
          <StyledButton>Explore More</StyledButton>
        </StyledLeft>
        <StyledRight>
          <StyledImage>
            <img src={explore} />
          </StyledImage>
        </StyledRight>
      </StyledContainer>
      <StyledInfoSection>
        <h2>
          Millions of tons of data automated by <strong>MBRS</strong>
        </h2>
      </StyledInfoSection>
    </StyledContainerOuter>
  );
};

const StyledInfoSection = styled.div`
  background-image: url(${BackImage});
  background-size: cover;
  height: 200px;
  display: flex;
  justify-content: center;
  font-weight: normal;
  h2 {
    font-size: 56px;
    color: white;
  }
`;

const StyledContainerOuter = styled.div`
  font-family: Roboto, sans-serif;
  background: #f8f8f8;
`;
const StyledContainer = styled.div`
  display: flex;

  padding: 10px 100px;
`;
const StyledHeading = styled.h2`
  font-size: 50px;
  font-wieght: bold;
`;
const StyledText = styled.p`
  font-size: 35px;
`;
const StyledButton = styled.button`
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  background-color: #1e3d5a;
  border-radius: 5px 5px 5px 5px;
  padding: 15px 40px 15px 40px;
  border: none;
  color: white;
`;
const StyledLeft = styled.div``;
const StyledRight = styled.div``;
const StyledImage = styled.div``;

export default ExploreMore;
