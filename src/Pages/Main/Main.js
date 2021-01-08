import React from "react";
import MainSectionComponent from "./Components/MainSectionComponent/MainSectionComponent";
import DoubleSectionComponent from "./Components/DoubleSectionComponent/DoubleSectionComponent";
import SingleSectionComponent from "./Components/SingleSectionComponent/SingleSectionComponent";
import SingleSectionComponentTwo from "./Components/SingleSectionComponentTwo/SingleSectionComponentTwo";
import SingleSectionComponentThree from "./Components/SingleSectionComponentThree/SingleSectionComponentThree";
import styled from "styled-components";
import { flexcenter } from "../../styles/Theme";

const Main = () => {
  return (
    <MainPage>
      <MainWrapper>
        <MainSectionComponent />
        <DoubleSectionComponent />
        <SingleSectionComponent />
        <SingleSectionComponentTwo />
        <SingleSectionComponentThree />
      </MainWrapper>
    </MainPage>
  );
};

export default Main;

const MainPage = styled.div`
  ${flexcenter};
`;

const MainWrapper = styled.div`
  ${flexcenter};
  flex-direction: column;
  min-height: 20vh;
  width: 64em;
`;
