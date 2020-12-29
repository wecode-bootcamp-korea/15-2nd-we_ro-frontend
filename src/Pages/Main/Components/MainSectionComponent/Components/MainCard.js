import React from "react";
import styled from "styled-components";
import { flexcenter } from "../../../../../styles/Theme";

const MainCard = ({ albumInfo }) => {
  return (
    <>
      {albumInfo.map((el, id) => {
        return (
          <MainCardWrapper>
            <MainCardSection key={id}>
              <MainCardSectionLeft>
                <img alt="albumcover" src={el.url} />
              </MainCardSectionLeft>
              <MainCardSectionRight>
                <MainCardSectionRightTop>{el.name}</MainCardSectionRightTop>
                <MainCardSectionRightBottom>{el.singer}</MainCardSectionRightBottom>
              </MainCardSectionRight>
            </MainCardSection>
          </MainCardWrapper>
        );
      })}
    </>
  );
};

export default MainCard;
const MainCardWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 50%;
  height: 25%;
`;

const MainCardSection = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const MainCardSectionLeft = styled.div`
  ${flexcenter};
  width: 30%;
  height: 100%;

  img {
    width: 58%;
    height: 62%;
    border-radius: 10%;
  }
`;

const MainCardSectionRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
`;

const MainCardSectionRightTop = styled.div`
  width: 100%;
  height: 50%;
  padding-top: 8.8%;
  font-size: 1em;
`;

const MainCardSectionRightBottom = styled.div`
  width: 100%;
  height: 50%;
  padding-top: 1.8%;
  color: #b7b6c0;
  font-size: 0.7em;
  font-weight: 400;
`;
