import React from "react";
import styled from "styled-components";
import NewAlbumBox from "../NewAlbumBox/NewAlbumBox";

function NewContentMap({ albumList }) {
  return (
    <AlbumBoxMapContainer>
      {albumList?.map((album, idx) => {
        return (
          <NewAlbumBox
            key={idx}
            id={album.album_id}
            imgUrl={album.album_cover}
            title={album.track_info[0].name}
            artist={album.artist_name}
          />
        );
      })}
    </AlbumBoxMapContainer>
  );
}

export default NewContentMap;

const AlbumBoxMapContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(50, 1fr);
  gap: 10px 20px;
  width: 200%;
  height: 261px;
`;
