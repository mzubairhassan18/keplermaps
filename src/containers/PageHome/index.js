import React from "react";
import Website from "../../website";
import PageMap from "../PageMap";
import ConnectHeader from "../ConnectHeader";
import OurServices from "../OurServices";
import ExploreMore from "../ExploreMore";

const PageHome = () => {
  return (
    <Website>
      <PageMap />
      <ConnectHeader />
      <OurServices />
      <ExploreMore />
    </Website>
  );
};
export default PageHome;
