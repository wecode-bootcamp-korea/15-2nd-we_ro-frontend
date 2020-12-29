import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import AlbumBoxMap from "../AlbumBoxMap/AlbumBoxMap";

function ThemeContent() {
  const [albumList, setAlbumList] = useState([]);

  useEffect(() => {
    getThemeContent();
  }, []);

  const getThemeContent = () => {
    fetch("/data/GenreDetailData.json")
      .then(res => res.json())
      .then(res => setAlbumList(res.AlbumBoxData));
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
            <FontAwesomeIcon className="fas" icon={faChevronLeft} />
            <FontAwesomeIcon className="fas" icon={faChevronRight} />
          </span>
        </div>
        <AlbumBoxMap albumList={albumList} />
      </article>
    </ThemeContentt>
  );
}

export default ThemeContent;

const ThemeContentt = styled.section`
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
        width: 40px;
        margin-right: 15px;

        .fas {
          cursor: pointer;
        }
      }
    }
  }
`;
