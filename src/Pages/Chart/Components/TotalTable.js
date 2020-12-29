import React from "react";
import Card from "./Card";

const TotalTable = ({ checkedItems, setCheckItems, handleSingleCheck, handleModal, goToList, showMore, totalData }) => {
  return (
    <tbody>
      {showMore
        ? totalData.map(item => {
            return (
              <Card
                rank={item.rank}
                title={item.title}
                album={item.album}
                artist={item.artist}
                image={item.imgUrl}
                checkedItems={checkedItems}
                setCheckItems={setCheckItems}
                handleSingleCheck={handleSingleCheck}
                handleModal={handleModal}
                goToList={goToList}
              />
            );
          })
        : totalData.slice(0, 10).map(item => {
            return (
              <Card
                rank={item.rank}
                title={item.title}
                album={item.album}
                artist={item.artist}
                image={item.imgUrl}
                checkedItems={checkedItems}
                setCheckItems={setCheckItems}
                handleSingleCheck={handleSingleCheck}
                handleModal={handleModal}
                goToList={goToList}
              />
            );
          })}
    </tbody>
  );
};

export default TotalTable;
