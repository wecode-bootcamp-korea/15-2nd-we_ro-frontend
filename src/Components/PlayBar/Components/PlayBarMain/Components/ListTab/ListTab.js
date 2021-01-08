import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faInbox } from "@fortawesome/free-solid-svg-icons/";
import { flexSpaceBetween } from "../../../../../../styles/Theme";
import styled from "styled-components";

function ListTab() {
  return (
    <ListTabContainer>
      <div className="myList">
        <FontAwesomeIcon className="fas Search" icon={faSearch} />
        <span>검색</span>
        <FontAwesomeIcon className="fas Inbox" icon={faInbox} />
        <span>내 리스트 가져오기</span>
      </div>
      <div className="group">
        <span>편집</span>
        <span>그룹열기</span>
      </div>
    </ListTabContainer>
  );
}

export default ListTab;

const ListTabContainer = styled.div`
  ${flexSpaceBetween}
  align-items: center;
  width: 571px;
  height: 81px;
  font-size: 14px;

  .myList {
    ${flexSpaceBetween}
    align-items: center;
    width: 220px;
    color: #a0a0a0;
    cursor: pointer;

    .fas {
      margin: 0 0 3px 13px;
    }
  }

  .group {
    width: 100px;
    ${flexSpaceBetween}
    letter-spacing: 0;
    color: #a0a0a0;
    cursor: pointer;
  }
`;
