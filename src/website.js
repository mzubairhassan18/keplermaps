import React from "react";
import PageHeader from "./containers/PageHeader";
import PageMap from "./containers/PageMap";
import ConnectHeader from "./containers/ConnectHeader";
import { ThemeProvider } from "styled-components";
import OurServices from "./containers/OurServices";
import ExploreMore from "./containers/ExploreMore";
import Footer from "./containers/Footer";

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
        height: "100vh",
        fontFamily: "Roboto, Sans-serif",
      }}
    >
      <ThemeProvider theme={theme}>
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
