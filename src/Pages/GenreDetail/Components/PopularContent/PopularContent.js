import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import ArtistBoxMap from "../ArtistBoxMap/ArtistBoxMap";

function PopularContent() {
  const [artistList, setArtistList] = useState([]);

  useEffect(() => {
    getPopularContent();
  }, []);

  const getPopularContent = () => {
    fetch("/data/GenreDetailData.json")
      .then(res => res.json())
      .then(res => setArtistList(res.ArtistBoxData));
  };
  return (
    <PopularContainer>
      <article className="popularBox">
        <div className="popularHeader">
          <span className="text">
            <span>인기 아티스트 </span>
            <FontAwesomeIcon className="rightarrow" icon={faChevronRight} />
          </span>
          <span className="arrow">
            <FontAwesomeIcon className="fas" icon={faChevronLeft} />
            <FontAwesomeIcon className="fas" icon={faChevronRight} />
          </span>
        </div>
        <ArtistBoxMap artistList={artistList} />
      </article>
    </PopularContainer>
  );
}

export default PopularContent;

const PopularContainer = styled.section`
  height: 337px;
  padding-top: 50px;

  .popularBox {
    height: 287px;

    .popularHeader {
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

    .popularAlbumList {
      display: flex;
      justify-content: space-evenly;
      height: 261px;
    }
  }
`;
