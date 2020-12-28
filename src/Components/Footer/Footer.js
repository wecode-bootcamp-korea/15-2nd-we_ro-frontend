import React from "react";
import styled from "styled-components";
import { flexcenter } from "../../styles/Theme";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterHeader>
          <FooterHeaderLeft>
            <ul>
              <li>wero 소개</li>
              <li>공지사항</li>
              <li>고객센터</li>
              <li>wero 플레이어 다운로드</li>
            </ul>
          </FooterHeaderLeft>
          <FooterHeaderRight>
            <div className="infoRight">
              <FaFacebookF className="far" />
              <FaInstagram className="far" />
              <FaYoutube className="far" />
              <FaTwitter className="far" />
            </div>
          </FooterHeaderRight>
        </FooterHeader>
        <FooterBase>
          <FooterElement company bold font>
            <li>회사소개</li>
            <li>이용약관</li>
            <li className="boldLi">개인정보 처리방침</li>
            <li>청소년 보호정책</li>
            <li>사업자정보 확인</li>
          </FooterElement>
          <FooterElement>
            <li>대표이사 : 김글로리</li>
            <li>이메일 : wero@music-wero.com</li>
            <li>사업자 등록번호 : 200-87-10100</li>
            <li>통신판매업 신고번호: 2020-서울선릉-1251</li>
          </FooterElement>
          <FooterElement address>
            <li>위로하우스 : 서울특별시 강남구 테헤란로 311 현대타워 3F</li>
            <li>대표전화 : 02-333-5557</li>
          </FooterElement>
          <FooterElement address>
            <li>주식회사 wero</li>
            <li>위로하우스 : 서울특별시 강남구 테헤란로 311 현대타워 3F</li>
          </FooterElement>
          <div className="allRightsSec">
            <div className="allRightsLeft">(주)문병곤컴퍼니 ALL RIGHTS RESERVED</div>
            <div className="allRightsRight">본 사이트는 Chrome 및 IE Edge 브라우저에서 사용 가능(예정).</div>
          </div>
        </FooterBase>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  ${flexcenter};
  bottom: 0%;
  width: 100%;
  height: 15em;
  padding-top: 1em;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60em;
  height: 15em;
`;

const FooterHeader = styled.div`
  display: flex;
  padding: 1em 0;
  border-bottom: 1px solid lightgrey;
`;

const FooterHeaderLeft = styled.div`
  display: flex;
  width: 50%;

  ul {
    display: flex;

    li {
      font-size: 1em;
      font-weight: 500;
    }

    li:not(:last-child):after {
      content: "ㅤ";
    }
  }
`;

const FooterHeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 50%;

  .infoRight {
    .far {
      margin: 0 0.4em;
    }
  }
`;

const FooterBase = styled.div`
  display: flex;
  flex-direction: column;

  .allRightsSec {
    display: flex;
    width: 100%;
    padding-top: 1.5em;

    .allRightsLeft {
      width: 50%;
      font-size: 0.7em;
    }

    .allRightsRight {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      width: 50%;
      color: grey;
      font-size: 0.7em;
      font-weight: 200;
    }
  }
`;

const FooterElement = styled.ul`
  display: flex;
  padding: ${props => (props.address ? "0 0 0.5em" : "1em 0")};
  color: ${props => (props.company ? "black" : "grey")};
  font-weight: ${props => (props.bold ? "350" : "200")};
  font-size: ${props => (props.font ? "0.8em" : "0.7em")};

  li:not(:last-child):after {
    content: "ㅤ|ㅤ";
  }

  .boldLi {
    font-weight: bold;
  }
`;
