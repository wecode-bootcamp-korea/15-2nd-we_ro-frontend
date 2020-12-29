import React from "react";
import styled from "styled-components";
import * as config from "../../../config";

const Modal = props => {
  return (
    <PopItemSelect>
      <Span className="selected">{props.count}</Span>
      <Button>
        <img alt="playBtn" src={config.playBtn} className="playBtn" />
        듣기
      </Button>
      <Button>
        <img alt="addBtn" src={config.addListBtn} />
        재생목록
      </Button>
      <Button onClick={props.goToList}>
        <img alt="myListBtn" src={config.myList} />
        내리스트
      </Button>
    </PopItemSelect>
  );
};

export default Modal;

const PopItemSelect = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-space-evenly;
  left: 39%;
  bottom: 195px;
  z-index: 500;
  width: 339px;
  height: 100px;
  border-radius: 5px;
  background-color: #3f3fff;
`;

const Span = styled.span`
  position: absolute;
  left: 14px;
  top: -23px;
  display: block;
  min-width: 11px;
  height: 37px;
  padding: 0 13px;
  border-radius: 50%;
  border: 2px solid #3f3fff;
  background-color: #fff;
  color: #3f3fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 38px;
  text-align: center;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 74px;
  height: 100%;
  color: #fff;
  font-size: 14px;
  background-color: transparent;
  color: white;
  margin: 0 auto 6px;
  border: none;
  outline: none;
  cursor: pointer;
  img {
    width: 30px;
    height: 30px;
  }
`;
