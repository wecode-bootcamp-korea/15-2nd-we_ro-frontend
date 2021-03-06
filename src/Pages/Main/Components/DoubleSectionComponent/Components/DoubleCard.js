import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const DoubleCard = ({ albumInfo }) => {
  return (
    <>
      {albumInfo.map((el, id) => {
        return (
          <AlbumContainer key={id}>
            <AlbumThumbNail>
              <img alt="albumcover" src={el.album_cover} />
              <FontAwesomeIcon key={id} className="far" icon={faPlay} />
            </AlbumThumbNail>
            <AlbumTextBox>
              <TitleOfSong>{el.album_name}</TitleOfSong>
              <Artist>{el.artist_name}</Artist>
            </AlbumTextBox>
          </AlbumContainer>
        );
      })}
    </>
  );
};

export default DoubleCard;

const AlbumContainer = styled.div`
  display: inline-block;
  position: relative;
  vertical-align: top;
  width: 20%;
  height: 50%;

  img {
    width: 100%;
    height: 92%;
    border-radius: 3%;
  }

  .far {
    position: absolute;
    width: 1.5em;
    height: 1.5em;
    right: 15%;
    bottom: 35%;
    color: lightgrey;

    &:hover {
      color: blue;
      transform: scale(1.2);
    }
  }
`;

const AlbumThumbNail = styled.div`
  width: 95%;
  height: 75%;
  padding-top: 1em;

  &:hover {
    opacity: 0.8;
  }
`;

const AlbumTextBox = styled.div`
  height: 24%;
  padding-left: 3%;
`;

const TitleOfSong = styled.div`
  width: 100%;
  height: 35%;
  font-size: 1.1em;

  a {
    color: #333333;
    font-size: 15px;

    & a:hover {
      color: blue;
    }
  }
`;

const Artist = styled.div`
  width: 100%;
  height: 65%;
  color: #969696;
  font-size: 0.9em;
`;
