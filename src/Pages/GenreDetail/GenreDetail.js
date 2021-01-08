import React from "react";
import styled from "styled-components";
import ThemeContent from "./Components/ThemeContent/ThemeContent";
import NewContent from "./Components/NewContent/NewContent";
import PopularContent from "./Components/PopularContent/PopularContent";

function GenreDetail() {
  return (
    <GenreDetailWrapper>
      <GenreContainer>
        <h2>국내 발라드</h2>
        <ThemeContent />
        <NewContent />
        <PopularContent />
      </GenreContainer>
    </GenreDetailWrapper>
  );
}

export default GenreDetail;

const GenreDetailWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const GenreContainer = styled.section`
  width: 61%;
  height: auto;
  margin: auto;
  padding: 50px 0 50px 0;
  overflow: hidden;

  h2 {
    height: 32px;
    font-size: 26px;
    font-weight: bold;
    color: #333333;
  }
`;
