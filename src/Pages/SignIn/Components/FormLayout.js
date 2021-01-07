import React from "react";
import ParagraphLink from "./ParagraphLink";

function FormLayout({ children }) {
  return (
    <div className="FormLayout">
      {children}
      {footerLink.linkValue.map((link, idx) => (
        <ParagraphLink format={footerLink} key={idx} text={link.text} url={link.url} />
      ))}
    </div>
  );
}

const footerLink = {
  linkValue: [
    { id: 1, text: "we_ro 소개", url: "/" },
    { id: 2, text: "공지사항", url: "/" },
    { id: 3, text: "고객센터", url: "/" },
    { id: 4, text: "이용약관", url: "/" },
    { id: 5, text: "개인정보처리방침", url: "/" },
    { id: 6, text: "사업자정보확인", url: "/" },
  ],
};
export default FormLayout;
