import React from "react";
import styled from "styled-components";
import MainCard from "./MainCard";

const MainCardCollection = ({ albumInfo }) => {
  return (
    <MainCardCollectionSection>
      <MainCard albumInfo={albumInfo} />
    </MainCardCollectionSection>
  );
};

export default MainCardCollection;

const MainCardCollectionSection = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;
