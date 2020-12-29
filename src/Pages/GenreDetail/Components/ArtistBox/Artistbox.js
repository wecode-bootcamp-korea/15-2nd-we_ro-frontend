import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

function ArtistBox({ imgUrl, title, listener }) {
  return (
    <ArtistContainer>
      <AlbumThumbNail>
        <Link to="/AlbumDetail">
          <img src={imgUrl} alt="artist" />
          <FontAwesomeIcon className="far play" icon={faPlay} />
          <FontAwesomeIcon className="far circle" icon={faPlayCircle} />
        </Link>
      </AlbumThumbNail>
      <AlbumTextBox>
        <div className="titleOfSong">
          <Link to="/AlbumDetail">{title}</Link>
        </div>
        <div className="artist">
          <Link to="/AlbumDetail">{listener}</Link>
        </div>
      </AlbumTextBox>
    </ArtistContainer>
  );
}

export default ArtistBox;

const ArtistContainer = styled.div`
  position: relative;
  width: 175px;
  height: 257px;
`;

const AlbumThumbNail = styled.div`
  height: 205px;
  padding-top: 14px;

  &:hover {
    filter: brightness(70%);
    transform: scale(1.1);
    transition-duration: 0.5s;
  }

  img {
    width: 175px;
    height: 175px;
    top: 17px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .play {
    position: absolute;
    font-size: 35px;
    right: 18px;
    top: 138px;
    color: #000000;

    &.play:hover {
      color: blue;
      transform: scale(1.2);
    }
  }

  .circle {
    position: absolute;
    font-size: 55px;
    right: 8px;
    top: 127px;
    color: #ffffff;
    border-radius: 50%;
    border: 1px solid gray;

    &.circle:hover {
      color: blue;
      transform: scale(1.2);
      border: none;
    }
  }
`;

const AlbumTextBox = styled.div`
  height: 32px;
  text-align: center;

  .titleOfSong {
    width: 175px;
    bottom: 35px;

    a {
      color: #333333;
      font-size: 15px;
    }
  }

  .artist {
    width: 175px;
    height: 16px;
    margin-top: 5px;

    a {
      font-size: 13px;
      color: #969696;
    }
  }
`;
