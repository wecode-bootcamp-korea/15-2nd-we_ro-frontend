import React from "react";
import Input from "./Input";
import Button from "./Button";
import FormLayout from "./FormLayout";
import ParagraphLink from "./ParagraphLink";
import ImgDiv from "./ImgDiv";

function Form({ format, onChange }) {
  return (
    <FormLayout>
      {format.inputValue.map((input, idx) => (
        <Input
          key={idx}
          name={input.name}
          type={input.type}
          placeholder={input.placeholder}
          value={input.value}
          onChange={onChange}
        />
      ))}
      {format.buttonValue.map((button, idx) => (
        <Button key={idx} text={button.text} onClick={button.onClick} />
      ))}
      {format.imgValue.map((img, idx) => (
        <ImgDiv key={idx} text={img.text} alt={img.alt} src={img.src} onClick={img.onClick} />
      ))}
      {format.linkValue.map((link, idx) => (
        <ParagraphLink key={idx} text={link.text} url={link.url} />
      ))}
    </FormLayout>
  );
}

export default Form;
