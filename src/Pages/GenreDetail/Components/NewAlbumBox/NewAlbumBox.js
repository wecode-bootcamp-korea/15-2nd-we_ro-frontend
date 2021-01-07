import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function NewAlbumBox({ imgUrl, title, artist }) {
  return (
    <AlbumContainer>
      <AlbumThumbNail>
        <Link to="/AlbumDetail">
          <img alt="albumCover" src={imgUrl} />
          <FontAwesomeIcon className="far" icon={faPlay} />
        </Link>
      </AlbumThumbNail>
      <AlbumTextBox>
        <div className="titleOfSong">
          <Link to="/AlbumDetail">{title}</Link>
        </div>
        <div className="artist">
          <Link to="/AlbumDetail">{artist}</Link>
        </div>
      </AlbumTextBox>
    </AlbumContainer>
  );
}

export default NewAlbumBox;

const AlbumContainer = styled.div`
  position: relative;
  width: 175px;
  height: 257px;
`;

const AlbumThumbNail = styled.div`
  width: 100%;
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
    border-radius: 15%;
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.8), -6px -6px 12px rgba(255, 255, 255, 0.4);
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .far {
    position: absolute;
    width: 25px;
    height: 25px;
    right: 14px;
    top: 145px;
    color: #ffffff;

    &:hover {
      color: blue;
      transform: scale(1.2);
    }
  }
`;

const AlbumTextBox = styled.div`
  height: 32px;

  .titleOfSong {
    width: 168px;
    bottom: 35px;
    margin-left: 7px;

    a {
      color: #333333;
      font-size: 15px;

      &:hover {
        color: blue;
      }
    }
  }

  .artist {
    width: 162px;
    height: 16px;
    margin: 5px 0 0 7px;

    a {
      font-size: 13px;
      color: #969696;
    }
  }
`;
