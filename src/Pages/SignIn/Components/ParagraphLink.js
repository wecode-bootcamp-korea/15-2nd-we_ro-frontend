import React from "react";
import { Link } from "react-router-dom";

function ParagraphLink({ text, url }) {
  return (
    <div className="ParagraphLink">
      <Link to={url}>{text}</Link>
    </div>
  );
}
export default ParagraphLink;
