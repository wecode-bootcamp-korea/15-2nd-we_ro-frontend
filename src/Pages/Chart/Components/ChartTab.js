import React from "react";
import styled from "styled-components";

const ChartTab = props => {
  return (
    <TabContainer>
      <Button
        value=""
        onClick={e => {
          props.handleChangeBtn(e);
        }}
      >
        전체
      </Button>
      <Button
        value="/1"
        onClick={e => {
          props.handleChangeBtn(e);
        }}
      >
        국내
      </Button>
      <Button
        value="/2"
        onClick={e => {
          props.handleChangeBtn(e);
        }}
      >
        해외
      </Button>
    </TabContainer>
  );
};

export default ChartTab;

const TabContainer = styled.div`
  width: 80%;
`;

const Button = styled.button`
  width: 100px;
  height: 32px;
  color: #333;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 20px;
  outline: none;
`;
