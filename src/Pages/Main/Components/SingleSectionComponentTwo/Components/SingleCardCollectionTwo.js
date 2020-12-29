import React, { useState } from "react";
import styled from "styled-components";
import SingleCard from "./SingleCardTwo";
import { MAIN_API } from "../../../../../config";

const SingleCardCollectionTwo = () => {
  const [singleData, setSingleData] = useState([]);

  React.useEffect(() => {
    fetch(MAIN_API, {
      method: "GET",
    })
      .then(res => res.json())
      .then(res => {
        const Arr = [];
        for (let i = 5; i < 7; i++) {
          Arr.push(res.albums.slice(i * 5, i * 5 + 5));
        }
        setSingleData(Arr);
      });
  }, []);
  return (
    <SglCardCollectionTwo>
      {singleData.map((el, id) => {
        return (
          <SingleCardCollectionSectionTwo key={id}>
            <SingleCard albumInfo={singleData[id]} />
          </SingleCardCollectionSectionTwo>
        );
      })}
    </SglCardCollectionTwo>
  );
};

export default SingleCardCollectionTwo;

const SglCardCollectionTwo = styled.div`
  display: flex;
`;

const SingleCardCollectionSectionTwo = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;
