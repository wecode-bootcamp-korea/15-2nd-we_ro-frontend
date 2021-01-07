import React, { useState } from "react";
import styled from "styled-components";
import SingleCard from "./SingleCard";

const SingleCardCollection = ({ mdName }) => {
  const [singleData, setSingleData] = useState([]);

  React.useEffect(() => {
    fetch(mdName)
      .then(res => res.json())
      .then(res => setSingleData(res.testSingle));
  }, []);
  console.log({ mdName });

  return (
    <SglCardCollection>
      {singleData.map((el, id) => {
        return (
          <SingleCardCollectionSection key={id}>
            <SingleCard albumInfo={singleData[id].album} />
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
