import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import ArtistBoxMap from "../ArtistBoxMap/ArtistBoxMap";

function PopularContent() {
  const [artistList, setArtistList] = useState([]);

  //API
  useEffect(() => {
    getPopularContent();
  }, []);

  const getPopularContent = () => {
    fetch("http://10.168.1.52:8000/music/artists")
      .then(res => res.json())
      .then(res => setArtistList(res.artist));
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
    <PopularContainer>
      <article className="popularBox">
        <div className="popularHeader">
          <span className="text">
            <span>인기 아티스트 </span>
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
        <ArtistBoxMapCard style={{ transform: `translateX(${x}%)` }}>
          <ArtistBoxMap artistList={artistList} />
        </ArtistBoxMapCard>
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

const ArtistBoxMapCard = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
  transition: 0.3s;
`;
