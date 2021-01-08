import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faMusic, faBars } from "@fortawesome/free-solid-svg-icons/";
import theme, { flexcenter, flexSpaceBetween } from "../../../../../../styles/Theme";

function ListCategory() {
  return (
    <ListCategoryContainer>
      <PlayList>
        <FontAwesomeIcon className="fas Bars" icon={faBars} />
        <span>재생목록</span>
      </PlayList>
      <Artist>
        <FontAwesomeIcon className="fas Mic" icon={faMicrophone} />
        <span>아티스트</span>
      </Artist>
      <SimilarSong>
        <FontAwesomeIcon className="fas Music" icon={faMusic} />
        <span>유사곡</span>
      </SimilarSong>
    </ListCategoryContainer>
  );
}

export default ListCategory;

const ListCategoryContainer = styled.div`
  ${flexSpaceBetween}
  height: 56px;
  cursor: pointer;

  .fas {
    font-size: 18px;
    color: ${theme.mainColorWhite};
    margin-right: 10px;
  }

  span {
    color: ${theme.mainColorWhite};
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), -2px -2px 4px rgba(255, 255, 255, 0.4);
  }
`;

const PlayList = styled.div`
  ${flexcenter}
  width: 192.05px;
  border-bottom: 2px solid #ffffff;
`;

const Artist = styled.div`
  ${flexcenter}
  width: 191.47px;
  border-bottom: 2px solid #464646;
`;

const SimilarSong = styled.div`
  ${flexcenter}
  width: 191.47px;
  border-bottom: 2px solid #464646;
`;
