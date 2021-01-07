import React, { useState } from "react";

function Input({ type, placeholder, onChange, name }) {
  const [inputText, setInput] = useState({ value: "" });

  const pushOnChange = e => {
    const { value, name } = e.target;
    onChange({ value: value, name: name });
    setInput({ value: value });
  };

  return (
    <div className="Input">
      <div className="inputWrapper">
        <input name={name} type={type} placeholder={placeholder} onChange={pushOnChange} value={inputText.value} />
      </div>
    </div>
  );
}

export default Input;
