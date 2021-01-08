import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRandom,
  faRetweet,
  faPlay,
  faStepForward,
  faStepBackward,
  faPause,
} from "@fortawesome/free-solid-svg-icons/";

function ControllerBox({ width, position, background_color, isPlaying, setIsPlaying, SkipSong, handleToggle }) {
  // 스트리밍 + 이미지회전
  const handleOnclick = () => {
    setIsPlaying(!isPlaying);
    handleToggle();
  };
  return (
    <ControllerContainer width={width} position={position} background_color={background_color}>
      <FontAwesomeIcon className="fas Retweet" icon={faRetweet} />
      <FontAwesomeIcon className="fas AngleDouble" icon={faStepBackward} onClick={() => SkipSong(false)} />
      <FontAwesomeIcon className="fas Play" icon={isPlaying ? faPause : faPlay} onClick={handleOnclick} />
      <FontAwesomeIcon className="fas AngleDouble" icon={faStepForward} onClick={() => SkipSong()} />
      <FontAwesomeIcon className="fas Random" icon={faRandom} />
    </ControllerContainer>
  );
}

export default ControllerBox;

const ControllerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: ${props => (props.position ? "" : "absolute")};
  width: ${props => (props.width ? "350px" : "inherit")};
  height: 40px;
  bottom: 50px;
  background-color: ${props => (props.background_color ? "#262626" : "#000000")};

  .fas {
    color: white;
    cursor: pointer;

    &.fas:hover {
      filter: brightness(30%);
    }
  }

  .Play {
    font-size: 38px;
  }

  .AngleDouble {
    font-size: 28px;
    margin-top: 5px;
  }

  .Retweet,
  .Random {
    font-size: 23px;
    color: #75757a;
    margin-top: 7px;
  }
`;
