import React from "react";
import styled from "styled-components";
import AlbumBox from "../AlbumBox/AlbumBox";

function AlbumBoxMap({ albumList }) {
  return (
    <AlbumBoxMapContainer>
      {albumList?.map((album, idx) => {
        return <AlbumBox key={idx} id={album.rank} imgUrl={album.imgUrl} title={album.title} artist={album.artist} />;
      })}
    </AlbumBoxMapContainer>
  );
}

export default AlbumBoxMap;

const AlbumBoxMapContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(50, 1fr);
  gap: 10px 20px;
  width: 200%;
  height: 261px;
`;
