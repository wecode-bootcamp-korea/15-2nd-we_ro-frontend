import React from "react";
import styled from "styled-components";
import * as config from "../../../config";

const ChartContentsHead = () => {
  return (
    <ChartContentHead>
      <div>
        <h4>FLO 차트</h4>
        <p className="upDate">
          <span>17:00 업데이트</span>
        </p>
      </div>
      <Button>
        <img src={config.playBtn} alt="플레이버튼" />
        전체듣기
      </Button>
    </ChartContentHead>
  );
};

export default ChartContentsHead;
const ChartContentHead = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  position: relative;
  padding: 0 0 16px;
  justify-content: space-between;
  div {
    display: flex;
    h4 {
      float: left;
      font-size: 22px;
      color: #333;
      font-weight: 700;
    }
    p {
      display: flex;
      align-items: center;
      span {
        margin-left: 20px;
        align-items: center;
      }
    }
  }

  img {
    margin-right: 5px;
    width: 15px;
    height: 15px;
  }
`;

const Button = styled.button`
  font-size: 15px;
  color: #333;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
