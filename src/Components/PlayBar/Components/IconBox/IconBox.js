import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faSlidersH } from "@fortawesome/free-solid-svg-icons/";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function IconBox() {
  return (
    <IconContainer>
      <FontAwesomeIcon className="fas heart" icon={faHeart} />
      <FontAwesomeIcon className="fas volumeUp" icon={faVolumeUp} />
      <FontAwesomeIcon className="fas SlidersH" icon={faSlidersH} />
    </IconContainer>
  );
}

export default IconBox;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 120px;
  right: 25px;
  font-size: 23px;

  .fas {
    color: #75757a;
    cursor: pointer;

    &.fas:hover {
      filter: brightness(30%);
    }
  }

  .heart,
  .volumeUp {
    margin-top: 5px;
  }

  .SlidersH {
    font-size: 30px;
  }
`;
