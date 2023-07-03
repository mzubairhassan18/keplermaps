import React from "react";
import PageHeader from "../PageHeader";
import Footer from "../Footer";
import { MdOutlineConstruction } from "react-icons/md";
import styled from "styled-components";

const PageCloud = () => {
  return (
    <>
      <PageHeader />
      <StyledPageInfo>
        <MdOutlineConstruction />
        <h2>This Page is under construction</h2>
      </StyledPageInfo>
      <Footer />
    </>
  );
};

const StyledPageInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  > svg {
    font-size: 99px;
    color: #001e37;
    opacity: 0.2;
  }
  > h2 {
    font-size: 31px;
  }
`;

export default PageCloud;
