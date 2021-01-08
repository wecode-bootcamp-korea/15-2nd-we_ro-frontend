import React from "react";
import ParagraphLink from "./ParagraphLink";
import styled from "styled-components";

function FormLayout({ children }) {
  return (
    <FormLayoutDiv>
      {children}
      {footerLink.linkValue.map((link, idx) => (
        <ParagraphLink format={footerLink} key={idx} text={link.text} url={link.url} />
      ))}
    </FormLayoutDiv>
  );
}

const footerLink = {
  linkValue: [],
};
export default FormLayout;

const FormLayoutDiv = styled.div``;
