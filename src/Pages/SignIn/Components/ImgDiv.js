import React from "react";

function ImgDiv({ text, imgSrc, imgAlt }) {
  return (
    <div className="ImgDiv">
      <img alt={imgAlt} src={imgSrc} />
      {text}
    </div>
  );
}

export default ImgDiv;
