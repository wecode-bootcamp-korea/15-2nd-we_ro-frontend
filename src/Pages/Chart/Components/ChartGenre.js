import React from "react";
import styled from "styled-components";

const ChartGenre = () => {
  return (
    <ContentSection>
      <section className="contentSection">
        <ContentHead>
          <span>장르</span>
          {/* </div> */}
        </ContentHead>
        <ContentsListContainer>
          <ul className="genreList">
            <li>
              <a>
                <img
                  alt="발라드"
                  src="https://cdn.music-flo.com/poc/p/image/display/genre_rc/20200911/cf603facfcbe45b5acf3421b0843f49a.jpg"
                />
                <span>발라드</span>
              </a>
            </li>
          </ul>
        </ContentsListContainer>
      </section>
    </ContentSection>
  );
};

export default ChartGenre;

const ContentSection = styled.section`
  width: 80%;
  height: 100%;
  padding: 95px 85px 40px;
  margin: 0 auto;
  position: relative;
`;

const ContentHead = styled.div`
  span {
    font-size: 32px;
  }
`;

const ContentsListContainer = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 3px;
    margin-left: 7px;
    list-style: none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;

    li {
      position: relative;
      display: inline-block;
      width: 215px;
      height: 100px;
      margin-top: 30px;
      margin-left: 30px;
      word-break: break-word;
      word-break: break-all;
      vertical-align: top;
      a {
        display: block;
        width: 100%;
        height: 100%;
        padding-right: 70px;
        border-radius: 6px;
        img {
          position: absolute;
          right: 0;
          top: 0;
          width: 230px;
          height: 100%;
          vertical-align: middle;
          border-radius: 6px;
        }
        span {
          font-size: 20px;
          color: #fff;
          position: relative;
          display: inline-block;
          margin: 22px 0 0 18px;
          z-index: 1;
        }
      }
    }
  }
`;
