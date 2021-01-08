import React, { useState } from "react";
import styled from "styled-components";
import SingleCard from "./SingleCardThree";
import { MAIN_API } from "../../../../../config";

const SingleCardCollectionThree = () => {
  const [singleData, setSingleData] = useState([]);

  React.useEffect(() => {
    fetch(MAIN_API, {
      method: "GET",
    })
      .then(res => res.json())
      .then(res => {
        const Arr = [];
        for (let i = 2; i < 4; i++) {
          Arr.push(res.albums.slice(i * 5, i * 5 + 5));
        }
        setSingleData(Arr);
      });
  }, []);
  return (
    <SglCardCollectionThree>
      {singleData.map((el, id) => {
        return (
          <SingleCardCollectionSectionThree key={id}>
            <SingleCard albumInfo={singleData[id]} />
          </SingleCardCollectionSectionThree>
        );
      })}
    </SglCardCollectionThree>
  );
};

export default SingleCardCollectionThree;

const SglCardCollectionThree = styled.div`
  display: flex;
`;

const SingleCardCollectionSectionThree = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;
