import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

class AlbumBox extends Component {
  render() {
    const { imgUrl, title, artist } = this.props;
    return (
      <AlbumContainer>
        <div className="albumThumbNail">
          <Link to="/AlbumDetail">
            <img src={imgUrl} alt="artist" />
            <FontAwesomeIcon className="far" icon={faPlay} />
          </Link>
        </div>
        <div className="albumTextBox">
          <div className="titleOfSong">
            <Link to="/AlbumDetail">{title}</Link>
          </div>
          <div className="artist">
            <Link to="/AlbumDetail">{artist}</Link>
          </div>
        </div>
      </AlbumContainer>
    );
  }
}

export default AlbumBox;

const AlbumContainer = styled.div`
  position: relative;
  width: 175px;
  height: 257px;

  .albumThumbNail {
    width: 100%;
    height: 205px;
    padding-top: 14px;

    &.albumThumbNail:hover {
      filter: brightness(70%);
    }
  }

  img {
    width: 175px;
    height: 175px;
    top: 17px;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .far {
    position: absolute;
    width: 25px;
    height: 25px;
    right: 14px;
    top: 145px;
    color: #ffffff;

    &.far:hover {
      color: blue;
      transform: scale(1.2);
    }
  }

  .albumTextBox {
    height: 32px;

    .titleOfSong {
      width: 168px;
      bottom: 35px;
      margin-left: 7px;

      a {
        color: #333333;
        font-size: 15px;

        & a:hover {
          color: blue;
        }
      }
    }

    .artist {
      width: 162px;
      height: 16px;
      margin: 5px 0 0 7px;

      a {
        font-size: 13px;
        color: #969696;
      }
    }
  }
`;
