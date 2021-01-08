import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AlbumInfo from "../../../AlbumInfo/AlbumInfo";
import theme, { flexcenter } from "../../../../../../styles/Theme";

function PlayListBox() {
  const [playList, setPlayList] = useState([]);

  // API
  useEffect(() => {
    getPlayList();
  }, []);

  const getPlayList = () => {
    fetch("http://10.168.1.42:8000/storage/mylist/1/music", {
      method: "GET",
      headers: {
        Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.O3B5nLCE4HFsIwOkgtAAqXTZu_bFTcKb2Zl8zRDIGOc",
        Character: "1",
      },
    })
      .then(res => res.json())
      .then(res => setPlayList(res.RESULTS));
  };

  return (
    <PlayListContainer>
      <MyPlayList>
        <div className="playListName">
          <span>나의 플레이리스트</span>
        </div>
      </MyPlayList>
      <AlbumInfoGrid>
        {playList.map((PlayList, idx) => {
          return (
            <AlbumInfo
              background_color="#181818"
              key={idx}
              id={PlayList.id}
              title={PlayList.music_name}
              artist={PlayList.music_artist}
              img={PlayList.music_image}
            />
          );
        })}
      </AlbumInfoGrid>
    </PlayListContainer>
  );
}

export default PlayListBox;

const PlayListContainer = styled.section`
  height: 450px;
  border-radius: 2%;
  background-color: #181818;
`;

const MyPlayList = styled.div`
  ${flexcenter}
  height: 60px;

  .playListName {
    position: relative;
    width: 535px;
    height: 60px;
    border-bottom: 1px solid #303030;

    span {
      position: absolute;
      bottom: 20px;
      font-weight: bold;
      color: ${theme.mainColorWhite};
    }
  }
`;

const AlbumInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  height: auto;
  margin-top: 10px;
`;
