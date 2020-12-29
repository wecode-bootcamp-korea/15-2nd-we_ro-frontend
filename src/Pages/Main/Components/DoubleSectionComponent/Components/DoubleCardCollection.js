import React, { useState } from "react";
import styled from "styled-components";
import DoubleCard from "./DoubleCard";

const DoubleCardCollection = () => {
  const [doubleData, setDoubleData] = useState([]);

  React.useEffect(() => {
    fetch("/data/aramDbleMD.json")
      .then(res => res.json())
      .then(res => setDoubleData(res.testDouble));
  }, []);

  return (
    <DblCardCollection>
      {doubleData.map((el, id) => {
        return (
          <DoubleCardCollectionSection key={id}>
            <DoubleCard albumInfo={doubleData[id].album} />
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
