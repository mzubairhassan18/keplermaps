import React, { useState } from "react";
import styled from "styled-components";
import App from "../../app";

const PageMap = () => {
  const [activeMap, setActiveMap] = useState("Arc");

  const handleActiveMap = (mapType) => {
    setActiveMap(mapType);
  };

  return (
    <div>
      <StyledMapButtons>
        <StyledButton
          isActive={activeMap == "Arc"}
          onClick={() => {
            handleActiveMap("Arc");
          }}
        >
          Arc GIS Map
        </StyledButton>
        <StyledButton
          isActive={activeMap == "Kepler"}
          onClick={() => {
            handleActiveMap("Kepler");
          }}
        >
          MBRSC Map
        </StyledButton>
      </StyledMapButtons>
      {activeMap == "Arc" ? (
        <iframe
          width="100%"
          height="600"
          src="https://experience.arcgis.com/experience/b681e8718f934867bc4a3671580ccf65"
        ></iframe>
      ) : (
        <StyledKeplerMaps>
          <App />
        </StyledKeplerMaps>
      )}
    </div>
  );
};

const StyledKeplerMaps = styled.div`
  display: block;
  height: 600px;
  > div {
    height: inherit;
  }
`;

const StyledMapButtons = styled.div`
  display: flex;
  justify-content: right;
  gap: 10px;
  margin-right: 20px;
`;
const StyledButton = styled.button`
  border: 2px solid #076fe5;
  padding: 8px 45px;
  border-bottom: none;
  border-radius: 5px;
  background: none;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  font-size: 15px;
  background: ${(props) => (props.isActive ? "#076fe5" : "white")};
  color: ${(props) => (props.isActive ? "white" : "black")};
  cursor: pointer;
`;

export default PageMap;
