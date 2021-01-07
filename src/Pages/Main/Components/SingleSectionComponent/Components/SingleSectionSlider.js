import React, { useState } from "react";
import styled from "styled-components";
import { flexcenter } from "../../../../../styles/Theme";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import SingleCardCollection from "./SingleCardCollection";

const SingleSectionSlider = ({ mdName }) => {
  const [data, setData] = useState([]);
  const [x, setX] = useState(0);
  const [current, setCurrent] = useState(0);
  const length = 2;

  const prevSlide = () => {
    setX(x + 50);

    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextSlide = () => {
    setX(x - 50);
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <>
      <ThisSingleSection>
        <SingleLeft></SingleLeft>
        <SingleMid>
          <SingleMidTop>
            <SingleMidTopLeft>국내 발라드</SingleMidTopLeft>
            <SingleMidTopRight>
              <SingleMidTopRightL status={current} onClick={prevSlide}>
                <MdKeyboardArrowLeft />
              </SingleMidTopRightL>
              <SingleMidTopRightR status={current} length={length} onClick={nextSlide}>
                <MdKeyboardArrowRight />
              </SingleMidTopRightR>
            </SingleMidTopRight>
          </SingleMidTop>
          <SingleMidBottom style={{ transform: `translateX(${x}%)` }}>
            <SingleCardCollection mdName={mdName} />
          </SingleMidBottom>
        </SingleMid>
        <SingleRight></SingleRight>
      </ThisSingleSection>
    </>
  );
};

export default SingleSectionSlider;

const ThisSingleSection = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const SingleLeft = styled.div`
  width: 5%;
`;

const SingleRight = styled.div`
  width: 5%;
`;

const SingleMid = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 90%;
`;

const SingleMidTop = styled.div`
  ${flexcenter};
  width: 100%;
  height: 10%;
  line-height: 150%;
`;

const SingleMidTopLeft = styled.div`
  width: 93.7%;
  height: 100%;
  font-size: 1.4em;
  font-weight: 600;
`;

const SingleMidTopRight = styled.div`
  width: 6.3%;
  height: 100%;
  font-size: 1.8em;
`;

const SingleMidTopRightL = styled.span`
  cursor: pointer;
  color: ${props => (props.status === 0 ? "#d9d9d9" : "black")};
  pointer-events: ${props => (props.status === 0 ? "none" : "auto")};
  &:hover {
    color: #3f3fff;
  }
`;

const SingleMidTopRightR = styled.span`
  cursor: pointer;
  color: ${props => (props.status === props.length - 1 ? "#d9d9d9" : "black")};
  pointer-events: ${props => (props.status === props.length - 1 ? "none" : "auto")};
  &:hover {
    color: #3f3fff;
  }
`;

const SingleMidBottom = styled.div`
  display: flex;
  width: 200%;
  height: 90%;
  transition: 0.3s;
`;
