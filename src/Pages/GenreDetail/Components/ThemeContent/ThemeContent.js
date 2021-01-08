import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import AlbumBoxMap from "../AlbumBoxMap/AlbumBoxMap";

function ThemeContent() {
  const [albumList, setAlbumList] = useState([]);

  // API
  useEffect(() => {
    getThemeContent();
  }, []);

  const getThemeContent = () => {
    fetch("http://10.168.1.42:8000/music")
      .then(res => res.json())
      .then(res => setAlbumList(res.MusicInfo));
  };

  // slider
  const [x, setX] = useState(0);
  const [current, setCurrent] = useState(0);
  const length = 2;

  const prevSlide = () => {
    setX(x + 100);

    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextSlide = () => {
    setX(x - 100);
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <ThemeContentt>
      <article className="themeBox">
        <div className="themeHeader">
          <span className="text">
            <span>테마리스트 </span>
            <FontAwesomeIcon className="rightarrow" icon={faChevronRight} />
          </span>
          <span className="arrow">
            <LeftArrow status={current} onClick={prevSlide}>
              <FontAwesomeIcon className="fas" icon={faChevronLeft} />
            </LeftArrow>
            <RightArrow status={current} length={length} onClick={nextSlide}>
              <FontAwesomeIcon className="fas" icon={faChevronRight} />
            </RightArrow>
          </span>
        </div>
        <AlbumBoxMapCard style={{ transform: `translateX(${x}%)` }}>
          <AlbumBoxMap albumList={albumList} />
        </AlbumBoxMapCard>
      </article>
    </ThemeContentt>
  );
}

export default ThemeContent;

const ThemeContentt = styled.section`
  overflow: hidden;
  height: 337px;
  padding-top: 50px;

  .themeBox {
    height: 287px;

    .themeHeader {
      display: flex;
      justify-content: space-between;
      height: 26px;

      span {
        font-size: 22px;
        cursor: pointer;
      }

      .rightarrow {
        font-size: 18px;
      }

      .arrow {
        display: flex;
        justify-content: space-between;
        width: 50px;
        margin-right: 15px;

        .fas {
          cursor: pointer;
        }
      }
    }
  }
`;

const LeftArrow = styled.span`
  width: 20px;
  height: 20px;
  color: ${props => (props.status === 0 ? "#d9d9d9" : "black")};
  pointer-events: ${props => (props.status === 0 ? "none" : "auto")};
`;

const RightArrow = styled.span`
  width: 20px;
  height: 20px;
  color: ${props => (props.status === props.length - 1 ? "#d9d9d9" : "black")};
  pointer-events: ${props => (props.status === props.length - 1 ? "none" : "auto")};
`;

const AlbumBoxMapCard = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
  transition: 0.3s;
`;
