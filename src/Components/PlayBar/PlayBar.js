import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import MainAlbumInfo from "./Components/MainAlbumInfo/MainAlbumInfo";
import ControllerBox from "./Components/ControllerBox/ControllerBox";
import PlayTimeBar from "./Components/PlayTimeBar/PlayTimeBar";
import IconBox from "./Components/IconBox/IconBox";
import PlayBarMain from "../PlayBar/Components/PlayBarMain/PlayBarMain";
import theme, { flexcenter, flexSpaceBetween, PlayBarSize } from "../../styles/Theme";

function PlayBar() {
  // Modal
  const [playBarModalStatus, setPlayBarModalStatus] = useState(false);

  const handleModal = () => {
    setPlayBarModalStatus(!playBarModalStatus);
  };

  // Audio localData
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
      img_src: "./Images/likethat.jpg",
      src: "./music/LikeThat.mp3",
    },
    {
      title: "Text Me",
      artist: "DPR Live",
      img_src: "./Images/DPR-Her.jpg",
      src: "./music/DPR LIVE - Text Me.mp3",
    },
    {
      title: "Say So",
      artist: "Doja Cat",
      img_src: "./Images/Dojacat-SaySo.jpg",
      src: "./music/Doja Cat - Say So.mp3",
    },
  ]);

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
      {playBarModalStatus && <PlayBarMain playBarModalStatus={playBarModalStatus} />}
      <PlayBarContainer>
        <AlbumInfoBox>
          <MainAlbumInfo />
        </AlbumInfoBox>
        <PlayControll>
          <ControllerBox
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            nextSongIndex={nextSongIndex}
            songs={songs}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            SkipSong={SkipSong}
          />
          <PlayTimeBar />
        </PlayControll>
        <audio src={songs[currentSongIndex].src} ref={audioEl} />
        <PlayList onClick={handleModal}>
          <div className="iconContainer">
            <IconBox />
          </div>
        </PlayList>
      </PlayBarContainer>
    </>
  );
}

export default PlayBar;

const PlayBarContainer = styled.div`
  position: fixed;
  ${flexSpaceBetween}
  width: 100%;
  height: 111px;
  z-index: 1;
  background-color: ${theme.playBarColor};
`;

const AlbumInfoBox = styled.div`
  display: flex;
  align-items: center;
  ${PlayBarSize}
  background-color: ${theme.playBarColor};
`;

const PlayControll = styled.div`
  position: relative;
  ${PlayBarSize}
  background-color: ${theme.playBarColor};
`;

const PlayList = styled.div`
  ${flexcenter}
  ${PlayBarSize}
  background-color: ${theme.playBarColor};

  .iconContainer {
    position: relative;
    width: inherit;
    height: 40px;
    background-color: ${theme.playBarColor};
  }
`;
