import React from "react";
import styled from "styled-components";
import ArtistBox from "../ArtistBox/Artistbox";

function ArtistBoxMap({ artistList }) {
  return (
    <ArtistBoxContainer>
      {artistList?.map((artist, idx) => {
        return <ArtistBox key={idx} imgUrl={artist.image} title={artist.name} listener={artist.popularity} />;
      })}
    </ArtistBoxContainer>
  );
}

export default ArtistBoxMap;

const ArtistBoxContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(50, 1fr);
  gap: 10px 20px;
  width: 200%;
  height: 261px;
`;
