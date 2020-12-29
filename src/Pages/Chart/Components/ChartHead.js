import React from "react";
import styled from "styled-components";
const ChartHead = props => {
  return (
    <ChartHeadContainer>
      <Tabletr>
        <Tabletd>
          <input
            type="checkbox"
            onChange={e => props.hadleAllCheck(e.target.checked)}
            onClick={props.handleModal}
            // checked={props.checkedItems.length !== props.totalData ? false : Tabletrue}
          />
        </Tabletd>
        <Tabletd>순위</Tabletd>
        <Tabletd></Tabletd>
        <Tabletd className="info">곡/앨범</Tabletd>
        <Tabletd className="artists">아티스트</Tabletd>
        <Tabletd>듣기</Tabletd>
        <Tabletd>재생목록</Tabletd>
        <Tabletd>내리스트</Tabletd>
        <Tabletd>좋아요</Tabletd>
      </Tabletr>
    </ChartHeadContainer>
  );
};

export default ChartHead;

const ChartHeadContainer = styled.thead`
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
`;

const Tabletr = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;

const Tabletd = styled.th`
  display: table-cell;
  vertical-align: middle;
  height: 39px;
  font-size: 13px;
  color: #a0a0a0;
  font-weight: 400;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  text-align: left;
`;
