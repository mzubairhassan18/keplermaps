// Copyright (c) 2023 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
import React from "react";
import { PanelHeaderFactory, Icons } from "@kepler.gl/components";
import { BUG_REPORT_LINK, USER_GUIDE_DOC } from "@kepler.gl/constants";
import logo from "../images/mbrsc_blank.png";
import styled from "styled-components";

// export function CustomPanelHeaderFactory(...deps) {
//   const PanelHeader = PanelHeaderFactory(...deps);
//   const defaultActionItems = PanelHeader.defaultProps.actionItems;
//   PanelHeader.defaultProps = {
//     ...PanelHeader.defaultProps,
//     appWebsite: null,
//     appName: "MBRSC",
//     version: "1.1.0",
//     actionItems: [
//       defaultActionItems.find((item) => item.id === "storage"),
//       {
//         ...defaultActionItems.find((item) => item.id === "save"),
//         label: null,
//         tooltip: "Share",
//       },
//     ],
//   };
//   return (
//     <>
//       HEllo world
//       <PanelHeader />
//     </>
//   );
// }

const CustomHeader = () => {
  return (
    <StyledHeaderContainer>
      <StyledImage src={logo} />
      <h2>MBRSC</h2>

      <Icons.Bug height={"20px"} />
      <Icons.Save height={"20px"} />
    </StyledHeaderContainer>
  );
};

const StyledHeaderContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 18px;
  color: white;
`;
const StyledImage = styled.img`
  width: 40%;
`;

export const CustomPanelHeaderFactory = () => CustomHeader;

// CustomPanelHeaderFactory.deps = PanelHeaderFactory.deps;

export function replacePanelHeader() {
  return [PanelHeaderFactory, CustomPanelHeaderFactory];
}
