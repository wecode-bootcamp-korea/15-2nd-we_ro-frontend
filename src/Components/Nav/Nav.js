import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { MAG_ICON, LEFT_BTN, RIGHT_BTN } from "../../config";
import { flexcenter } from "../../styles/Theme";

const Nav = () => {
  const history = useHistory();
  const goHome = () => {
    history.push("/");
  };
  return (
    <NavContainer>
      <NavLogoSection onClick={goHome}>
        <NavLogoSectionTop>^</NavLogoSectionTop>
        <NavLogoSectionBottom>wero</NavLogoSectionBottom>
      </NavLogoSection>
      <NavBtnSection>
        {LEFT_BTN.map((el, i) => {
          return <NavBtnLeft key={i}>{el.content}</NavBtnLeft>;
        })}
      </NavBtnSection>
      <NavSearchSection>
        <svg class="svg-icon" viewBox="0 0 20 20">
          <path d={MAG_ICON}></path>
        </svg>
        <input className="navSearchBar" placeholder="검색어를 입력하세요." />
      </NavSearchSection>
      {sessionStorage.length === 0 ? (
        <NavLoginSection>
          {RIGHT_BTN.map((el, i) => {
            return <NavBtnRight key={i}>{el.content}</NavBtnRight>;
          })}
        </NavLoginSection>
      ) : (
        <NavLoginSection>
          <NavBtnRight>FLO 소개</NavBtnRight>
          <li className="profile">
            <img alt="profile" src="/Images/profile.jpg" />
          </li>
        </NavLoginSection>
      )}
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.div`
  ${flexcenter};
  z-index: 10;
  position: fixed;
  top: 0%;
  width: 100%;
  height: 5em;
  background-color: white;
  cursor: pointer;
`;

const NavLogoSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  width: 4em;
  font-family: Anton;
  font-weight: 655;

  @media only screen and (max-width: 720px) {
    margin-right: 3.5em;
  }

  @media only screen and (max-width: 980px) {
    padding-right: 1em;
  }
`;

const NavLogoSectionTop = styled.div`
  line-height: 0;
  font-size: 1.4em;
  padding-left: 1.1em;
`;
const NavLogoSectionBottom = styled.div`
  line-height: 0.4;
  font-size: 2em;
`;

const NavBtnSection = styled.div`
  ${flexcenter};
  width: 15em;
  font-size: 0.9em;

  @media only screen and (max-width: 980px) {
    display: none;
  }
`;

const NavSearchSection = styled.div`
  display: flex;
  align-items: center;
  width: 28em;

  .svg-icon {
    position: absolute;
    width: 1em;
    height: 1em;
    margin-left: 10px;
  }

  .svg-icon path,
  .svg-icon polygon,
  .svg-icon rect {
    fill: black;
  }

  .svg-icon circle {
    stroke: black;
    stroke-width: 1;
  }

  .navSearchBar {
    width: 25em;
    height: 2.5em;
    border: 1px solid lightgrey;
    border-radius: 50px;
    text-indent: 2em;
    &:focus {
      outline: none;
    }
  }

  @media only screen and (max-width: 720px) {
    display: none;
  }
`;

const NavLoginSection = styled.div`
  ${flexcenter};
  width: 18em;
  margin-left: 3.5em;
  font-weight: normal;
  cursor: pointer;
`;

const NavBtnLeft = styled.div`
  padding: 0.5em;
  margin: 0.1em;
  font-size: 1em;
  font-weight: normal;
  cursor: pointer;
  text-overflow: clip;
`;

const NavBtnRight = styled.div`
  padding: 1em;
  font-size: 0.85em;
  color: #b2aeae;
`;
