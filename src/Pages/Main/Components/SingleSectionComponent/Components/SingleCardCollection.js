import React, { useState } from "react";
import styled from "styled-components";
import SingleCard from "./SingleCard";
import { MAIN_API } from "../../../../../config";

const SingleCardCollection = () => {
  const [singleData, setSingleData] = useState([]);

  React.useEffect(() => {
    fetch(MAIN_API, {
      method: "GET",
    })
      .then(res => res.json())
      .then(res => {
        const length = res.albums.length;
        const Arr = [];
        for (let i = 0; i < length / 20; i++) {
          Arr.push(res.albums.slice(i * 5, i * 5 + 5));
        }
        setSingleData(Arr);
      });
  }, []);
  return (
    <SglCardCollection>
      {singleData.map((el, id) => {
        return (
          <SingleCardCollectionSection key={id}>
            <SingleCard albumInfo={singleData[id]} />
          </SingleCardCollectionSection>
        );
      })}
    </SglCardCollection>
  );
};

export default SingleCardCollection;

const SglCardCollection = styled.div`
  display: flex;
`;

const SingleCardCollectionSection = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;
