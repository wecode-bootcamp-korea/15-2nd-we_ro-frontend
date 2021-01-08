import React from "react";
import styled from "styled-components";
import SingleSectionSliderThree from "./Components/SingleSectionSliderThree";

const SingleSectionComponentThree = () => {
  return (
    <SingleSectionThree>
      <SingleSectionSliderThree />
    </SingleSectionThree>
  );
};

export default SingleSectionComponentThree;

const SingleSectionThree = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
  width: 100%;
  height: 18em;
`;
