import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons/";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import theme, { flexSpaceBetween } from "../../../../../../styles/Theme";

function ControllBox({ song, nextSongIndex, currentSong, nextSong }) {
  return (
    <ControllContainer>
      <div className="titleBox">
        <div className="title">
          <span>{song.title}</span>
        </div>
        <div className="likeBox">
          <FontAwesomeIcon className="fas heart" icon={faHeart} />
          <FontAwesomeIcon className="fas folder" icon={faFolderPlus} />
        </div>
      </div>
      <div className="artistBox">
        <span>{song.artist}</span>
      </div>
      <div className="nextSong">
        <span>
          다음곡 : {currentSong} by {nextSong}
        </span>
      </div>
    </ControllContainer>
  );
}

export default ControllBox;

const ControllContainer = styled.div`
  height: 92px;
  margin-top: 65px;

  .titleBox {
    ${flexSpaceBetween}
    height: 36px;

    .title {
      width: 300px;
      margin-top: 10px;

      span {
        font-size: 22px;
        color: ${theme.mainColorWhite};
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), -2px -2px 4px rgba(255, 255, 255, 0.4);
      }
    }

    .likeBox {
      ${flexSpaceBetween}
      width: 65px;
      margin: 10px 10px 0 0;

      .fas {
        font-size: 25px;
        color: #75757a;
        cursor: pointer;

        &.fas:hover {
          filter: brightness(70%);
        }
      }
    }
  }

  .artistBox {
    span {
      font-size: 13px;
      color: #989898;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), -2px -2px 4px rgba(255, 255, 255, 0.4);
    }
  }

  .nextSong {
    height: 30px;
    margin-top: 20px;

    span {
      font-size: 14px;
      color: lightgrey;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), -2px -2px 4px rgba(255, 255, 255, 0.4);
    }
  }
`;
