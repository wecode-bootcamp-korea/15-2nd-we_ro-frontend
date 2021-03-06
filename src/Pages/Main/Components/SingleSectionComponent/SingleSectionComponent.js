import React from "react";
import styled from "styled-components";
import SingleSectionSlider from "./Components/SingleSectionSlider";

const SingleSectionComponent = () => {
  return (
    <SingleSection>
      <SingleSectionSlider />
    </SingleSection>
  );
};

export default SingleSectionComponent;

const SingleSection = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
  width: 100%;
  height: 18em;
`;
