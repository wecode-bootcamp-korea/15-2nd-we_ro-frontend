import React, { useState, useEffect } from "react";
import TotalTable from "./Components/TotalTable";
import ChartGenre from "./Components/ChartGenre";
import ChartTab from "./Components/ChartTab";
import ChartContentsHead from "./Components/ChartContentsHead";
import ChartHead from "./Components/ChartHead";
import Modal from "./Components/Modal";
import { LIST_API, TOTAL_API } from "../../config";
import axios from "axios";
import styled from "styled-components";

const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.O3B5nLCE4HFsIwOkgtAAqXTZu_bFTcKb2Zl8zRDIGOc";
const Chart = () => {
  // 데이터받아오기
  const [totalData, setTotalData] = useState([]);

  useEffect(() => {
    getTotalData();
  }, []);

  const getTotalData = async () => {
    let result = await axios.get(`${TOTAL_API}/music`);
    setTotalData(result.data.MusicInfo);
  };

  //국내 해외
  const [value, setValue] = useState("");

  const handleChangeBtn = async e => {
    const { value } = e.target;
    const result = await axios.get(`${TOTAL_API}/music${value}`);
    setValue(value);

    if (value == "") {
      setTotalData(result.data.MusicInfo);
    } else {
      setTotalData(result.data.Music_info);
    }
  };

  // 10개만 보여줬다가 더보기 누르면 다 보여주기.
  const [showMore, setShowMore] = useState(false);

  const handleMoreBtn = e => {
    setShowMore(!showMore);
  };

  // checkbox
  const [checkedItems, setCheckItems] = useState([]);
  const [count, setCount] = useState(0);
  const hadleAllCheck = checked => {
    if (checked) {
      const idArr = [];
      totalData.forEach(el => idArr.push(el.rank));
      setCheckItems(idArr);
      setCount(idArr.length);
    } else {
      setCheckItems([]);
    }
  };

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems([...checkedItems, id]);
      setCount(checkedItems.length + 1);
    } else {
      setCheckItems(checkedItems.filter(el => el !== id));
      setCount(count === 0 ? count : count - 1);
    }
  };

  // 모달
  const [modal, setModal] = useState(true);
  const handleModal = () => {
    setModal(count < 0 ? !modal : modal);
  };

  // 리스트로 보내기
  const goToList = e => {
    checkedItems ? console.log(checkedItems) : alert("체크해요");
    fetch(`${LIST_API}/storage/mylist/1/music`, {
      method: "POST",
      headers: {
        Character: 1,
        Authorization: TOKEN,
      },
      body: JSON.stringify({
        id: checkedItems,
      }),
    })
      .then(res => res.json())
      .then(res => console.log(res));
    alert(`리스트에 ${count}곡이 추가되었습니다.`);
  };

  return (
    <>
      <MainContainer>
        <ChartContainer>
          <ChartTab handleChangeBtn={handleChangeBtn} />
          <ChartContentsHead />
          <ChartTableContainer>
            <ChartTable>
              <ChartHead
                handleModal={handleModal}
                hadleAllCheck={hadleAllCheck}
                checkedItems={checkedItems}
                totalData={totalData}
              />
              <TotalTable
                showMore={showMore}
                totalData={totalData}
                checkedItems={checkedItems}
                setCheckItems={setCheckItems}
                handleSingleCheck={handleSingleCheck}
                handleModal={handleModal}
                goToList={goToList}
              />
            </ChartTable>
          </ChartTableContainer>
          <MoreBtnContainer>
            <button onClick={handleMoreBtn}>더보기</button>
          </MoreBtnContainer>
        </ChartContainer>
      </MainContainer>
      {modal && checkedItems.length > 0 && <Modal count={count} totalData={totalData} goToList={goToList} />}
      <ChartGenre />
    </>
  );
};

export default Chart;

const MainContainer = styled.section`
  width: auto;
  height: 100%;
  padding: 95px 85px 40px;
  margin: 0 auto;
`;

const ChartContainer = styled.div`
  width: 80%;
  padding: 50px 0 0;
  margin: 0 auto;
`;

const ChartTableContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const MoreBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  margin-top: 20px;
  button {
    width: 88px;
    height: 36px;
    padding: 0 15px;
    border: 1px solid #ebebeb;
    border-radius: 18px;
    color: #000;
    line-height: 37px;
    outline: none;
    cursor: pointer;
  }
`;

const ChartTable = styled.table`
  min-width: 100%;
  max-width: none;
  margin: 0 auto;
  display: table;
  text-indent: initial;
  border-spacing: 2px;
  border-color: gray;
  width: auto;
  border-collapse: collapse;
  table-layout: fixed;
`;
