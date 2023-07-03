import React from "react";
import PageHeader from "./containers/PageHeader";
import PageMap from "./containers/PageMap";
import ConnectHeader from "./containers/ConnectHeader";
import { ThemeProvider } from "styled-components";
import OurServices from "./containers/OurServices";
import ExploreMore from "./containers/ExploreMore";
import Footer from "./containers/Footer";
import { createGlobalStyle } from "styled-components";

import DMMonoFonts from "./fonts/DMMono-Regular.ttf";
import DubaiFonts from "./fonts/DubaiW23-Regular.woff";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'DMMonoFonts';
    src: url('./fonts/DMMono-Regular.ttf') format('ttf');
  }
  @font-face {
    font-family: 'DubaiFonts';
    src: url('./fonts/DubaiW23-Regular.woff') format('woff');
  }

  /* Additional global styles... */
`;

const Website = () => {
  const theme = {
    colors: {
      primary: "#011e51",
    },
  };
  return (
    <div
      style={{
        overflowY: "auto",
        overflowX: "hidden",
        height: "100vh",
        fontFamily: "Roboto, Sans-serif",
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PageHeader />
        <PageMap />
        <ConnectHeader />
        <OurServices />
        <ExploreMore />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default Website;
