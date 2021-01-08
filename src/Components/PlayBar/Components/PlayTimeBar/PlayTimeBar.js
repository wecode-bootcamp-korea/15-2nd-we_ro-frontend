import React from "react";
import styled from "styled-components";

function PlayTimeBar() {
  return (
    <PlayTimeBarBox>
      <span>00:00</span>
      <input type="range" step="0.01" className="range" />
      <span>03:00</span>
    </PlayTimeBarBox>
  );
}

export default PlayTimeBar;

const PlayTimeBarBox = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 350px;
  height: 20px;
  left: 13px;
  bottom: 15px;

  span {
    height: 15px;
    margin-bottom: 1px;
    color: #626262;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: -1.5px;
  }

  input {
    background-color: rgba(8, 80, 214, 0.644);
    height: 2px;
    width: 70%;
    margin-top: 4px;
    cursor: pointer;
    opacity: 1;
  }
`;
