import React from "react";
import { Link } from "react-router-dom";
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
              <Link to="/genredetail">
                <img
                  alt="애럼's Pick"
                  src="https://images.unsplash.com/photo-1589906493606-a6ca2a06078b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                />
                <span>애럼's Pick</span>
              </Link>
            </li>
            <li>
              <Link to="/genredetail">
                <img
                  alt="태진's Pick"
                  src="https://images.unsplash.com/photo-1609954451401-545b43fb59b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                />
                <span>태진's Pick</span>
              </Link>
            </li>
            <li>
              <Link to="/genredetail">
                <img
                  alt="병곤's Pick"
                  src="https://images.unsplash.com/photo-1606851281895-c4d3b1c134e7?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                />
                <span>병곤's Pick</span>
              </Link>
            </li>
            <li>
              <Link to="/genredetail">
                <img
                  alt="영광's Pick"
                  src="https://images.unsplash.com/photo-1609862351410-709228a62361?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                />
                <span>영광's Pick</span>
              </Link>
            </li>
            <li>
              <Link to="/genredetail">
                <img
                  alt="승현&순태's Pick"
                  src="https://images.unsplash.com/photo-1609855900260-759aa47281e5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDh8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
                <span>승현&순태's Pick</span>
              </Link>
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
    justify-content: space-between;
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
          font: italic bold 18px;
          color: #eeeeee;
          position: relative;
          display: inline-block;
          margin: 22px 0 0 10px;
          z-index: 1;
        }
      }
    }
  }
`;
