import React from "react";
import styled from "styled-components";

function MainAlbumInfo() {
  return (
    // <AlbumInfoCard background_color={background_color}>
    //   <img alt="albumCover" src={song.img_src} />
    //   <span className="title">{song.title}</span>
    //   <span className="artist">{song.artist}</span>
    // </AlbumInfoCard>
    <MainAlbumInfoCard>
      <img alt="albumCover" src="./Images/dprlive1.jpeg" />
      <span className="title">KISS ME</span>
      <span className="artist">DPR Live</span>
    </MainAlbumInfoCard>
  );
}

export default MainAlbumInfo;

const MainAlbumInfoCard = styled.div`
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
