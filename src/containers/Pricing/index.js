import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import PageHeader from "../PageHeader";
import Basic from "../../images/basic.png";
import Premium from "../../images/premium.png";
import Expert from "../../images/expert.png";
import Custom from "../../images/custom.png";
import Smile from "../../images/smile.png";
import ContactBack from "../../images/contactback.png";

const Pricing = () => {
  return (
    <>
      <PageHeader />
      <StyledContainer>
        <StyledPricingContainer>
          <StyledPricingHeader>Pricing</StyledPricingHeader>
          <StyledPricingPacakges>
            <StyledPackage>
              <StyledCircle className="basic">
                <span>
                  Basic <br /> Package
                </span>
              </StyledCircle>
              <StyledPacakgeInfo>
                <StyledPrice>250 AED / Month</StyledPrice>
                <StyledPacakgeDesc>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </StyledPacakgeDesc>
              </StyledPacakgeInfo>
            </StyledPackage>

            <StyledPackage>
              <StyledCircle className="Premium">
                <span>
                  Premium <br /> Package
                </span>
              </StyledCircle>
              <StyledPacakgeInfo>
                <StyledPrice>250 AED / Month</StyledPrice>
                <StyledPacakgeDesc>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </StyledPacakgeDesc>
              </StyledPacakgeInfo>
            </StyledPackage>

            <StyledPackage>
              <StyledCircle className="Expert">
                <span>
                  Expert <br /> Package
                </span>
              </StyledCircle>
              <StyledPacakgeInfo>
                <StyledPrice>250 AED / Month</StyledPrice>
                <StyledPacakgeDesc>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </StyledPacakgeDesc>
              </StyledPacakgeInfo>
            </StyledPackage>

            <StyledPackage>
              <StyledCircle className="custom">
                <span>
                  Custom <br /> Package
                </span>
              </StyledCircle>
              <StyledPacakgeInfo>
                <StyledPrice>250 AED / Month</StyledPrice>
                <StyledPacakgeDesc>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </StyledPacakgeDesc>
              </StyledPacakgeInfo>
            </StyledPackage>
          </StyledPricingPacakges>
        </StyledPricingContainer>
      </StyledContainer>
      <StyledContactSection>
        <StyledContactHeading>We Care Our Globe</StyledContactHeading>
        <img src={Smile} />
        <StyledContacts>
          <StyledContact>
            Say Hello! <br />
            (+971)12 0000 23
          </StyledContact>
          <StyledContact>
            Write Us!
            <br />
            support@MBRSC.com
          </StyledContact>
          <StyledContact>
            Get Social ! <br />
            @MBRSCSocial
          </StyledContact>
        </StyledContacts>
      </StyledContactSection>
      <Footer />
    </>
  );
};

const StyledContactHeading = styled.h2`
  color: #003459;
  font-family: "Roboto", Sans-serif;
  font-size: 56px;
  font-weight: 600;
`;
const StyledContact = styled.div`
  background: url(${ContactBack});
  background-size: contain;
  width: 285px;
  height: 168px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
`;
const StyledContacts = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 40px;
`;
const StyledContactSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledCircle = styled.div`
  background: red;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  margin-top: -78px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: white;
  margin: 0 auto;
  margin-top: -83px;
  box-shadow: 0px 20px 20px 6px #a7a7a7c7;
  > span {
    margin-top: 70px;
    text-align: center;
  }
  &.basic {
    background: #00b9ef;
  }
  &.Premium {
    background: #2769f3;
  }
  &.expert {
    background: #731aeb;
  }
  &.custom {
    background: #f86f1c;
  }
`;
const StyledPacakgeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 80px;
  padding: 0 10px;
`;
const StyledPackageImage = styled.div``;
const StyledPricingHeader = styled.h2`
  text-align: center;
  font-size: 32px;
  color: white;
  margin-top: 0;
`;
const StyledPrice = styled.h3`
  font-size: 24px;
  font-weight: bold;
`;
const StyledPacakgeDesc = styled.span`
  text-align: center;
`;
const StyledPackage = styled.div`
  height: 414px;
  border-radius: 30px;
  width: 267px;
  position: relative;
  background: white;
  overflow: hidden;
`;

const StyledPricingPacakges = styled.div`
  display: flex;
  justify-content: center;
  gap: 31px;
  flex-wrap: wrap;
`;
const StyledPricingContainer = styled.div`
  padding: 15px;
`;
const StyledContainer = styled.div`
  background: #c6cad0;
`;

export default Pricing;
