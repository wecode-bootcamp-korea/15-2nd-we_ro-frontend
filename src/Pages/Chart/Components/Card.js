import React, { useState } from "react";
import * as config from "../../../config";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = ({ rank, handleSingleCheck, handleModal, checkedItems, image, title, album, artist, goToList }) => {
  // 좋아요버튼
  const [liked, setLikedBtn] = useState(false);

  const handleClick = e => {
    setLikedBtn(!liked);
  };

  return (
    <MusicContainer>
      <td className="select">
        <input
          type="checkbox"
          onChange={e => {
            handleSingleCheck(e.target.checked, rank);
          }}
          onClick={handleModal}
          checked={checkedItems.includes(rank) ? true : false}
        />
      </td>
      <td className="rank">{rank}</td>
      <td></td>
      <td className="info">
        <InfoWrap>
          <Link to={`/musicdetail/${rank}`}>
            <div className="infoImg">
              <img alt="수염괴물" src={image} />
            </div>
            <div className="infoText">
              <button className="titleBtn">
                <p>
                  <strong>{title}</strong>
                </p>
              </button>
              <a className="albumTitle">{album}</a>
            </div>
          </Link>
        </InfoWrap>
      </td>
      <Artist>
        <p>
          <span>{artist}</span>
        </p>
      </Artist>
      <IconTd>
        <button onClick={goToList}>
          <img alt="playBtn" src={config.playBtn} className="playBtn" />
        </button>
      </IconTd>
      <IconTd>
        <button onClick={goToList}>
          <img alt="addBtn" src={config.addListBtn} />
        </button>
      </IconTd>
      <IconTd>
        <button onClick={goToList}>
          <img alt="myListBtn" src={config.myList} />
        </button>
      </IconTd>
      <IconTd>
        <button onClick={handleClick}>
          {liked ? <img alt="heart" src={config.heart} /> : <img alt="likBtn" src={config.likeBtn} />}
        </button>
      </IconTd>
    </MusicContainer>
  );
};

export default Card;

const MusicContainer = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
  td {
    position: relative;
    height: 84px;
    text-align: left;
    border-bottom: 1px solid #f6f6f6;
    display: table-cell;
    vertical-align: middle;
  }
`;

const InfoWrap = styled.td`
  position: relative;
  min-width: 210px;
  max-width: 520px;
  height: 60px;
  padding-right: 28px;
  padding-left: 80px;
  text-align: left;
  .infoImg {
    position: absolute;
    left: 0;
    width: 60px;
    height: 60px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .infoText {
    min-width: 130px;
    max-width: 440px;
    button {
      font-family: inherit;
      vertical-align: middle;
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      p {
        font-size: 15px;
        padding-top: 12px;
      }
    }
    .albumTitle {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-top: 6px;
      font-size: 13px;
      margin-left: 7px;
      color: #969696;
    }
  }
`;

const Artist = styled.td`
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    span {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 196px;
    }
  }
`;

const IconTd = styled.td`
  button {
    width: 40px;
    height: 40px;
    background-color: white;
    border: none;
    cursor: pointer;
    img {
      width: 15px;
      height: 15px;
      &.playBtn {
        margin-right: 15px;
      }
    }
  }
`;
