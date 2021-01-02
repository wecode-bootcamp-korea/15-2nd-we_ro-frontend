import React from "react";
import styled from "styled-components";
import { flexcenter } from "../../../../../../styles/Theme";

function ImgBox({ song, isOn }) {
  return (
    <ImgContainer>
      <img alt="albumCover" className={"img_" + (isOn ? "basic" : "rotation")} src={song.img_src} />
    </ImgContainer>
  );
}

export default ImgBox;

const ImgContainer = styled.div`
  ${flexcenter}
  height: 402px;

  .img_basic {
    width: 402px;
    height: 402px;
    border-radius: 50%;
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.8), -6px -6px 12px rgba(255, 255, 255, 0.4);
  }

  .img_rotation {
    width: 402px;
    height: 402px;
    border-radius: 50%;
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.8), -6px -6px 12px rgba(255, 255, 255, 0.4);
    animation: rotation 20s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;
