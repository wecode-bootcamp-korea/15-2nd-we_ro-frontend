import React, { useState } from "react";
import styled from "styled-components";
import { flexcenter } from "../../../../../styles/Theme";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import DoubleCardCollection from "./DoubleCardCollection";

const DoubleSectionSlider = () => {
  const [data, setData] = useState([]);
  const [x, setX] = useState(0);
  const [current, setCurrent] = useState(0);
  const length = 2;
  // React.useEffect(() => {
  //   fetch("/data/aramData.json")
  //     .then(res => res.json())
  //     .then(res => setData(res.songs2));
  // }, []);

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
      <ThisDoubleSection>
        <DoubleLeft></DoubleLeft>
        <DoubleMid>
          <DoubleMidTop>
            <DoubleMidTopLeft>오늘 발매 음악 {">"}</DoubleMidTopLeft>
            <DoubleMidTopRight>
              <DoubleMidTopRightL status={current} onClick={prevSlide}>
                <MdKeyboardArrowLeft />
              </DoubleMidTopRightL>
              <DoubleMidTopRightR status={current} length={length} onClick={nextSlide}>
                <MdKeyboardArrowRight />
              </DoubleMidTopRightR>
            </DoubleMidTopRight>
          </DoubleMidTop>
          <DoubleMidBottom style={{ transform: `translateX(${x}%)` }}>
            <DoubleCardCollection />
          </DoubleMidBottom>
        </DoubleMid>
        <DoubleRight></DoubleRight>
      </ThisDoubleSection>
    </>
  );
};

export default DoubleSectionSlider;

const ThisDoubleSection = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const DoubleLeft = styled.div`
  width: 5%;
`;

const DoubleRight = styled.div`
  width: 5%;
`;

const DoubleMid = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 90%;
`;

const DoubleMidTop = styled.div`
  ${flexcenter};
  width: 100%;
  height: 5%;
  line-height: 150%;
`;

const DoubleMidTopLeft = styled.div`
  width: 93.7%;
  height: 100%;
  font-size: 1.4em;
  font-weight: 600;
`;

const DoubleMidTopRight = styled.div`
  width: 6.3%;
  height: 100%;
  font-size: 1.8em;
`;

const DoubleMidTopRightL = styled.span`
  cursor: pointer;
  color: ${props => (props.status === 0 ? "#d9d9d9" : "black")};
  pointer-events: ${props => (props.status === 0 ? "none" : "auto")};
  &:hover {
    color: #3f3fff;
  }
`;

const DoubleMidTopRightR = styled.span`
  cursor: pointer;
  color: ${props => (props.status === props.length - 1 ? "#d9d9d9" : "black")};
  pointer-events: ${props => (props.status === props.length - 1 ? "none" : "auto")};
  &:hover {
    color: #3f3fff;
  }
`;

const DoubleMidBottom = styled.div`
  display: flex;
  width: 200%;
  height: 95%;
  transition: 0.3s;
`;
