import React from "react";
import styled from "styled-components";
import SingleSectionSliderTwo from "./Components/SingleSectionSliderTwo";

const SingleSectionComponentTwo = () => {
  return (
    <SingleSectionTwo>
      <SingleSectionSliderTwo />
    </SingleSectionTwo>
  );
};

export default SingleSectionComponentTwo;

const SingleSectionTwo = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
  width: 100%;
  height: 18em;
`;
