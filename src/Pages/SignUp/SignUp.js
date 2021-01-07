import React, { useState } from "react";
import { useHistory } from "react-router";
import Form from "../SignIn/Components/Form";
import { handleValidation } from "../utils";

function SignIn() {
  const [accountForm] = useState(signUpProps);
  const history = useHistory();
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [checkPhoneNumber, setCheckPhoneNumber] = useState(false);
  const [checkBirthDate, setCheckBirthDate] = useState(false);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    date_of_birth: "",
    phone_number: "",
  });

  const { email, password, date_of_birth, phone_number } = inputs;

  const handleIdPasswordInput = e => {
    setInputs({
      ...inputs,
      [e.name]: e.value,
    });
  };

  const checkValidation = () => {
    const emailRule = /[^@]+@[^@]+\.[^@]+/;
    const pwRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{8,18}/;
    const birthDateRule = /(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/;
    const phoneNumberRule = /(010)(-{1}\d{4}-{1}\d{4})/;
    const inputPass = checkEmail && checkPassword && checkPhoneNumber && checkBirthDate;

    email.match(emailRule) ? setCheckEmail(true) : setCheckEmail(false);
    password.match(pwRule) ? setCheckPassword(true) : setCheckPassword(false);
    phone_number.match(phoneNumberRule) ? setCheckPhoneNumber(true) : setCheckPhoneNumber(false);
    date_of_birth.match(birthDateRule) ? setCheckBirthDate(true) : setCheckBirthDate(false);

    inputPass && signUpFetch();
  };

  const signUpFetch = () => {
    fetch("http://10.168.1.42:8000/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        date_of_birth: date_of_birth,
        phone_number: phone_number,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.MESSAGE === "SUCCESS") {
          alert("환영합니다");
          history.push({
            pathname: "/",
          });
        } else if (res.MESSAGE === "ACCOUNT_EXISTS_ALREADY") {
          alert("이미 등록된 이메일입니다");
        } else {
          alert("아이디 혹은 비밀번호를 확인해 주세요");
        }
      });
  };

  const kakaoLogin = () => {
    const { Kakao } = window;
    Kakao.Auth.login({
      success: function (authObj) {
        fetch("http://10.168.1.42:8000/users/kakao-signup", {
          method: "POST",
          body: JSON.stringify({
            kakao_access_token: authObj.access_token,
          }),
        })
          .then(res => res.json())
          .then(res => {
            sessionStorage.setItem("kakao_access_token", res.access_token);
            if (res.MESSAGE === "SUCCESS") {
              alert("KAKAO LOGIN SUCCESS");
              history.push("/SignIn");
            } else {
              alert("KAKAO LOGIN FAIL");
            }
          });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };

  return (
    <div className="SignIn">
      <button onClick={handleValidation}>signup test</button>
      <button onClick={kakaoLogin}>kakao login test</button>
      <Form format={accountForm} onChange={handleIdPasswordInput} value={email} />
    </div>
  );
}

const signUpProps = {
  inputValue: [
    { id: 1, name: "email", type: "id", placeholder: "아이디(이메일)" },
    { id: 2, name: "password", type: "password", placeholder: "비밀번호" },
    { id: 3, name: "passwordValid", type: "password", placeholder: "비밀번호 확인" },
    { id: 4, name: "date_of_birth", type: "text", placeholder: "생년 월일" },
    { id: 5, name: "phone_number", type: "text", placeholder: "전화번호" },
  ],

  buttonValue: [
    { id: 1, text: "이메일 회원가입", onClick: { handleValidation } },
    { id: 2, text: "카카오 회원가입" },
  ],

  linkValue: [],
};

export default SignIn;
