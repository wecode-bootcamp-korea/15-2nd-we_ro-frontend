import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/";
import { flexcenter, flexSpaceBetween } from "../../../../styles/Theme";
import styled from "styled-components";
import ImgBox from "./Components/ImgBox/ImgBox";
import ControllBox from "./Components/ControllBox/ControllBox";
import ControllerBox from "../ControllerBox/ControllerBox";
import ListCategory from "./Components/ListCategory/ListCategory";
import ListTab from "./Components/ListTab/ListTab";
import PlayListBox from "./Components/PlayListBox/PlayListBox";

function PlayBarMain() {
  // Modal
  const [show, setShow] = useState(true);

  const handleModalOff = () => {
    setShow(false);
  };

  // Audio data
  const [songs] = useState([
    {
      title: "Kiss Me",
      artist: "DPR Live",
      img_src: "./Images/dprlive1.jpeg",
      src: "./music/DPR LIVE - KISS ME.mp3",
    },
    {
      title: "Like That",
      artist: "Doja Cat",
      img_src: "./Images/likethat.jpeg",
      src: "./music/LikeThat.mp3",
    },
    {
      title: "Text Me",
      artist: "DPR Live",
      img_src: "./Images/dprtext.jpeg",
      src: "./music/DPR LIVE - Text Me.mp3",
    },
    {
      title: "Say So",
      artist: "Doja Cat",
      img_src: "./Images/Sayso.jpeg",
      src: "./music/Doja Cat - Say So.mp3",
    },
  ]);

  // Image Rotation
  const [isOn, setIsOn] = useState(true);
  const handleToggle = () => {
    setIsOn(!isOn);
  };

  // Audio Streaming
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp++;

        if (temp > songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = songs.length - 1;
        }

        return temp;
      });
    }
  };

  return (
    <>
      {show && (
        <PlayMainContainer>
          <PlayContainer>
            <FontAwesomeIcon className="fas chevronDown" icon={faChevronDown} onClick={handleModalOff} />
            <div className="playBox">
              <ImgBox song={songs[currentSongIndex]} isOn={isOn} />
              <ControllBox
                song={songs[currentSongIndex]}
                currentSong={songs[nextSongIndex].title}
                nextSong={songs[nextSongIndex].artist}
              />
              <div className="ControllerContainer">
                <ControllerBox
                  primary
                  width="350"
                  position="none"
                  background_color="#262626"
                  currentSongIndex={currentSongIndex}
                  setCurrentSongIndex={setCurrentSongIndex}
                  nextSongIndex={nextSongIndex}
                  songs={songs}
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                  SkipSong={SkipSong}
                  isOn={isOn}
                  setIsOn={setIsOn}
                  handleToggle={handleToggle}
                />
              </div>
            </div>
            <audio src={songs[currentSongIndex].src} ref={audioEl} />
          </PlayContainer>
          <PlayListContainer>
            <div className="listContainer">
              <ListCategory />
              <ListTab />
              <PlayListBox song={songs[currentSongIndex]} />
            </div>
          </PlayListContainer>
        </PlayMainContainer>
      )}
    </>
  );
}

export default PlayBarMain;

const PlayMainContainer = styled.div`
  ${flexSpaceBetween}
  width: 100vw;
  height: 100vh;
  background-color: #262626;
  overflow: hidden;
`;

const PlayContainer = styled.section`
  ${flexcenter}
  width: 50%;
  height: inherit;

  .chevronDown {
    font-size: 50px;
    color: #d8d8d8;
    margin: 40px 0 auto 0;
    cursor: pointer;

    &.chevronDown:hover {
      filter: brightness(30%);
    }
  }

  .playBox {
    width: 575px;
    height: 761px;
    margin-left: 270px;

    .ControllerContainer {
      ${flexcenter}
      width: inherit;
      height: 40px;
      padding-top: 70px;
    }
  }
`;

const PlayListContainer = styled.section`
  width: 50%;
  height: inherit;
  background-color: #262626;

  .listContainer {
    width: 575px;
    height: 700px;
    margin: 80px 0 0 50px;
  }
`;
