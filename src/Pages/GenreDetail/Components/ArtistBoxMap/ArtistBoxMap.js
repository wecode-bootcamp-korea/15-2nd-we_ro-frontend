import React from "react";
import styled from "styled-components";
import ArtistBox from "../ArtistBox/Artistbox";

function ArtistBoxMap({ artistList }) {
  return (
    <ArtistBoxContainer>
      {artistList?.map((artist, idx) => {
        return (
          <ArtistBox key={idx} id={artist.id} imgUrl={artist.imgUrl} title={artist.title} listener={artist.listener} />
        );
      })}
    </ArtistBoxContainer>
  );
}

export default ArtistBoxMap;

const ArtistBoxContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 10px 20px;
  width: auto;
  height: 261px;
  overflow: hidden;
`;
