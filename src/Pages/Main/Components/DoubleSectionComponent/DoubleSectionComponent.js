import React from "react";
import styled from "styled-components";
import DoubleSectionSlider from "./Components/DoubleSectionSlider";

const DoubleSectionComponent = () => {
  return (
    <DoubleSection>
      <DoubleSectionSlider></DoubleSectionSlider>
    </DoubleSection>
  );
};

export default DoubleSectionComponent;

const DoubleSection = styled.div`
  min-height: 50vh;
  margin-top: 3em;
  width: 100%;
  height: 37em;
`;
