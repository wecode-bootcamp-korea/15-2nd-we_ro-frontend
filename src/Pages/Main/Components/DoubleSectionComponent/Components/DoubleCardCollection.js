import React, { useState } from "react";
import styled from "styled-components";
import DoubleCard from "./DoubleCard";
import { MAIN_API } from "../../../../../config";

const DoubleCardCollection = () => {
  const [doubleData, setDoubleData] = useState([]);

  React.useEffect(() => {
    fetch(MAIN_API, {
      method: "GET",
    })
      .then(res => res.json())
      .then(res => {
        const length = res.albums.length;
        const Arr = [];
        for (let i = 2; i < 4; i++) {
          Arr.push(res.albums.slice(i * 10, i * 10 + 10));
        }
        setDoubleData(Arr);
      });
  }, []);

  return (
    <DblCardCollection>
      {doubleData.map((el, id) => {
        return (
          <DoubleCardCollectionSection key={id}>
            <DoubleCard albumInfo={doubleData[id]} />
          </DoubleCardCollectionSection>
        );
      })}
    </DblCardCollection>
  );
};

export default DoubleCardCollection;

const DblCardCollection = styled.div`
  display: flex;
`;

const DoubleCardCollectionSection = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;
