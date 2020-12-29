import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import AlbumBoxMap from "../AlbumBoxMap/AlbumBoxMap";

function NewContent() {
  const [albumList, setAlbumList] = useState([]);

  useEffect(() => {
    getNewContent();
  }, []);

  const getNewContent = () => {
    fetch("/data/GenreDetailData.json")
      .then(res => res.json())
      .then(res => setAlbumList(res.AlbumBoxData));
  };

  return (
    <NewContentt>
      <article className="newBox">
        <div className="newHeader">
          <span className="text">
            <span>최신앨범 </span>
            <FontAwesomeIcon className="rightarrow" icon={faChevronRight} />
          </span>
          <span className="arrow">
            <FontAwesomeIcon className="fas" icon={faChevronLeft} />
            <FontAwesomeIcon className="fas" icon={faChevronRight} />
          </span>
        </div>
        <AlbumBoxMap albumList={albumList} />
      </article>
    </NewContentt>
  );
}
export default NewContent;

const NewContentt = styled.section`
  height: 337px;
  padding-top: 50px;

  .newBox {
    height: 287px;

    .newHeader {
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

    .newAlbumList {
      display: flex;
      justify-content: space-evenly;
      height: 261px;
    }
  }
`;
