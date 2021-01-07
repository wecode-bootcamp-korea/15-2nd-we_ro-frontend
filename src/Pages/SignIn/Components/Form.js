import React from "react";
import Input from "./Input";
import Button from "./Button";
import FormLayout from "./FormLayout";
import ParagraphLink from "./ParagraphLink";

function Form({ format, onChange }) {
  console.log(format);
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
      {format.linkValue.map((link, idx) => (
        <ParagraphLink key={idx} text={link.text} url={link.url} />
      ))}
    </FormLayout>
  );
}

export default Form;
