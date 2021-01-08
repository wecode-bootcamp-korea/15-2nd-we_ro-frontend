import React from "react";
import styled from "styled-components";
import MainSectionSlider from "./Components/MainSectionSlider";
import { flexcenter } from "../../../../styles/Theme";

const MainSectionComponent = () => {
  return (
    <MainSection>
      <MainSectionSlider />
    </MainSection>
  );
};

export default MainSectionComponent;

const MainSection = styled.div`
  ${flexcenter};
  flex-direction: column;
  width: 100%;
  height: 22em;
  margin-top: 8em;
`;
