import React from "react";
import styled from "styled-components";

function AlbumInfo({ background_color, song, id, title, artist, img }) {
  console.log(id);
  return (
    <AlbumInfoCard background_color={background_color} id={id}>
      <img alt="albumCover" src={img} />
      <span className="title">{title}</span>
      <span className="artist">{artist}</span>
    </AlbumInfoCard>
  );
}

export default AlbumInfo;

const AlbumInfoCard = styled.div`
  position: relative;
  width: 332px;
  height: 63px;
  background-color: ${props => (props.background_color ? "#181818" : "#000000")};

  img {
    position: absolute;
    width: 63px;
    height: 63px;
    left: 30px;
    border-radius: 6%;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), -2px -2px 4px rgba(255, 255, 255, 0.4);
  }

  .title {
    position: absolute;
    width: 80px;
    left: 110px;
    bottom: 30px;
    font-size: 18px;
    white-space: nowrap;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), -2px -2px 4px rgba(255, 255, 255, 0.4);
  }

  .artist {
    position: absolute;
    width: 120px;
    left: 110px;
    bottom: 10px;
    font-size: 14px;
    color: #898989;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), -2px -2px 4px rgba(255, 255, 255, 0.4);
  }
`;
