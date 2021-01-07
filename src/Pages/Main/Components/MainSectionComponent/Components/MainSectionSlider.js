import React, { useState } from "react";
import styled from "styled-components";
import { flexcenter } from "../../../../../styles/Theme";
import { FaPlayCircle } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import MainCardCollection from "./MainCardCollection";
import { BsDot } from "react-icons/bs";

const MainSectionSlider = () => {
  const [data, setData] = useState([]);
  const [realData, setRealData] = useState([]);
  const [x, setX] = useState(0);
  const FIRST_API = "http://10.168.1.52:8000/music/album/info";
  const [current, setCurrent] = useState(0);
  const length = data.length;

  React.useEffect(() => {
    fetch("/data/aramData.json")
      .then(res => res.json())
      .then(res => setData(res.songs1));
  }, []);

  const prevSlide = () => {
    setX(x + 105.7);

    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextSlide = () => {
    setX(x - 105.7);
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const dotFunction = num => {
    if (num === 0) {
      setX(0);
      setCurrent(0);
      console.log(current);
    }
    if (num === 1) {
      setX(-105.5);
      setCurrent(1);
      console.log(current);
    }
    if (num === 2) {
      setX(-211);
      setCurrent(2);
      console.log(current);
    }
    if (num === 3) {
      setX(-316.5);
      setCurrent(3);
      console.log(current);
    }
    if (num === 4) {
      setX(-422);
      setCurrent(4);
      console.log(current);
    }
  };
  return (
    <>
      <ThisMainTop>
        <ThisMainSection>
          <MainSectionLeft status={current} onClick={prevSlide}>
            <MdKeyboardArrowLeft />
          </MainSectionLeft>
          <ThisMain>
            {data.map((el, id) => {
              return (
                <MainSectionMid key={id} style={{ transform: `translateX(${x}%)` }}>
                  <MainParts mainPartLeft>
                    <div className="mplTop">{data[id].title}</div>
                    <div className="mplMid">
                      {data[id].number} {data[id].date}
                    </div>
                    <div className="mplBot">
                      <FaPlayCircle />
                    </div>
                  </MainParts>
                  <MainParts>
                    <MainCardCollection albumInfo={data[id].album} />
                  </MainParts>
                </MainSectionMid>
              );
            })}
          </ThisMain>
          <MainSectionRight status={current} length={length} onClick={nextSlide}>
            <MdKeyboardArrowRight />
          </MainSectionRight>
        </ThisMainSection>
      </ThisMainTop>
      <MainSectionBottom>
        {data.map((el, id) => {
          return (
            <BsDot
              className="bsDot"
              key={id}
              onClick={() => dotFunction(el.id)}
              color={el.id === current ? "#3f3fff" : "lightgrey"}
            />
          );
        })}
      </MainSectionBottom>
    </>
  );
};

export default MainSectionSlider;

const ThisMainTop = styled.div`
  display: flex;
  height: 90%;
  width: 100%;
`;
const ThisMainSection = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;
const MainSectionLeft = styled.div`
  display: ${props => (props.status === 0 ? "none" : "flex")};
  position: absolute;
  z-index: 1;
  width: 5%;
  height: 100%;
  padding-top: 12%;
  background-color: white;
  font-size: 3em;

  &:hover {
    color: #3f3fff;
    cursor: pointer;
  }
`;

const ThisMain = styled.div`
  display: flex;
`;

const MainSectionMid = styled.div`
  ${flexcenter};
  width: 57.3em;
  margin-left: 3em;
  margin-right: 0.3em;
  border-radius: 0.5em;
  background-color: #4c4863;
  transition: 0.3s;
`;
const MainParts = styled.div`
  display: flex;
  flex-direction: ${props => (props.mainPartLeft ? "column" : "row")};
  width: ${props => (props.mainPartLeft ? "27%" : "68%")};
  height: 90%;
  margin: ${props => (props.mainPartLeft ? "0 2em;" : "0 0.5em;")};
  color: white;

  .mplTop {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50%;
    line-height: 1.4;
    padding-right: 1em;
    font-weight: bold;
    font-size: 1.8em;
  }

  .mplMid {
    width: 100%;
    height: 15%;
  }

  .mplBot {
    width: 100%;
    height: 35%;
    font-size: 3em;
  }
`;

const MainSectionRight = styled.div`
  display: ${props => (props.status === props.length - 1 ? "none" : "flex")};
  position: absolute;
  width: 5%;
  height: 100%;
  right: 0%;
  padding-top: 12%;
  background-color: white;
  font-size: 3em;

  &:hover {
    color: #3f3fff;
    cursor: pointer;
  }
`;

const MainSectionBottom = styled.div`
  ${flexcenter};
  width: 100%;
  height: 10%;
  padding: 0;
  padding-top: 1em;
  margin: 0;
  font-size: 1.7em;

  .bsDot:hover {
    cursor: pointer;
  }
`;
