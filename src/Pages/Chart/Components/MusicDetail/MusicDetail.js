import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChartHead from "../ChartHead";
import MusicDetailCard from "./MusicDetailCard";
import axios from "axios";
import styled from "styled-components";

const MusicDetail = () => {
  const [detailData, setDetailData] = useState([]);
  const [albumData, setAlbumData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getDetailData();
  }, []);

  const getDetailData = async () => {
    let result = await axios.get("/data/album.json");
    const newResult = result.data.album;
    const matched = newResult.find(item => {
      return item.album_id == id;
    });
    setDetailData(matched);
    setAlbumData(matched.track_info);
  };

  return (
    <SectionDetail>
      <MusicDetailContainer>
        <MusicDetailContent>
          <MusicDetailImg>
            <div className="Albumthumbnail">
              <img src={detailData.album_cover} alt="albumImg" />
            </div>
          </MusicDetailImg>
          <MusicDetailInfo>
            <MusicDetailTitle>
              <p className="title">{detailData.album_name}</p>
              <p className="artist">{detailData.artist_name}</p>
            </MusicDetailTitle>
            <Dl>
              <dd>{detailData.album_type}</dd>
              <dd>{detailData.album_genre}</dd>
              <dd className="date">{detailData.release_date}</dd>
            </Dl>
          </MusicDetailInfo>
        </MusicDetailContent>
        <div className="tabBtn">
          <Button>수록곡</Button>
        </div>

        <AlbumMusic>
          <ChartHead />
          {albumData.map(data => {
            return (
              <MusicDetailCard
                id={data.id}
                title={data.name}
                album={detailData.album_name}
                artist={detailData.artist_name}
                img={detailData.album_cover}
              />
            );
          })}
        </AlbumMusic>
      </MusicDetailContainer>
    </SectionDetail>
  );
};
export default MusicDetail;

const SectionDetail = styled.section`
  width: auto;
  height: 100%;
  padding: 95px 80px 40px;
  background-color: #fff;
`;
const MusicDetailContainer = styled.div`
  max-width: 80%;
  min-width: 800px;
  margin: 0 auto;
  padding-top: 50px;
`;
const MusicDetailContent = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const MusicDetailImg = styled.div`
  padding-left: 50px;
  div {
    height: 240px;
    width: 240px;
    z-index: 3;
    img {
      border-radius: 6px;
      width: 240px;
      height: 240px;
    }
  }
`;

const MusicDetailInfo = styled.div`
  padding-right: 50px;
  padding-left: 35px;
`;

const MusicDetailTitle = styled.div`
  padding-right: 30px;

  .title {
    padding-top: 20px;
    font-size: 28px;
    font-weight: 700;
  }
  .artist {
    padding-top: 14px;
    font-size: 16px;
  }
`;

const Dl = styled.dl`
  padding-top: 30px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  dd {
    font-size: 15px;
    padding: 0 9px 0 10px;
    position: relative;
    display: inline;
    &.date {
      display: block;
    }
  }
`;

const Button = styled.button`
  position: absolute;
  margin-left: 135px;
  margin-top: 25px;
  padding-top: 10px;
  padding-right: 8px;
  color: #fff;
  background-color: #3f3fff;
  border-color: #3f3fff;
  height: 32px;
  padding: 0 15px;
  line-height: 32px;
  text-align: center;
  border-radius: 16px;
  vertical-align: top;
  font-size: 16px;
  border: 0;
  outline: none;
  cursor: pointer;
`;

const AlbumMusic = styled.table`
  width: 100%;
  margin-top: 100px;
`;
