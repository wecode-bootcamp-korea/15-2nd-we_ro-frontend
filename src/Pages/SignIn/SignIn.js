import React, { useState } from "react";
import { useHistory } from "react-router";
import Form from "./Components/Form";
import styled from "styled-components";
import Nav from "../../Components/Nav/Nav";

const { Kakao } = window;

function SignIn() {
  const history = useHistory();
  const [accountForm] = useState(signInProps);
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const handleIdPasswordInput = e => {
    setInputs({
      ...inputs,
      [e.name]: e.value,
    });
  };

  const checkValidation = () => {
    const pwRule = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[~,!,@,#,$,*,(,),=,+,_,.,|]).*$/;
    const emailRule = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const inputPass = checkEmail && checkPassword;

    email.match(emailRule) ? setCheckEmail(true) : setCheckEmail(false);
    password.match(pwRule) ? setCheckPassword(true) : setCheckPassword(false);

    inputPass && signInFetch();
  };

  const signInFetch = () => {
    fetch("http://10.168.1.42:8000/users/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.MESSAGE === "SUCCESS") {
          sessionStorage.setItem("ACCESS_TOKEN", res.ACCESS_TOKEN);
          alert("로그인 성공!");
          history.push("/");
        } else {
          alert("아이디 혹은 비밀번호를 확인해 주세요");
        }
      });
  };

  const socialLogin = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        alert("success");
        fetch("http://10.168.1.42:8000/users/kakao-signin", {
          method: "POST",
          body: {
            kakao_access_token: authObj.access_token,
          },
        })
          .then(res => res.json())
          .then(res => {
            sessionStorage.setItem("kakao_access_token", res.ACCESS_TOKEN);

            if (res.ACCESS_TOKEN) {
              alert("로그인 성공!");
              history.push("/");
            } else {
              alert("추가 회원 정보가 필요합니다.");
              history.push("/signup");
            }
          });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };

  return (
    <SignInDiv>
      <Form format={accountForm} onChange={handleIdPasswordInput} value={email} />
      <button className="logInBtn" onClick={checkValidation}>
        로그인
      </button>
      <button className="kakaoBtn" onClick={socialLogin}>
        카카오 로그인
      </button>
    </SignInDiv>
  );
}

const signInProps = {
  inputValue: [
    { id: 1, name: "email", type: "id", placeholder: "아이디(이메일)" },
    { id: 2, name: "password", type: "password", placeholder: "비밀번호" },
  ],
  linkValue: [{ id: 1, text: "회원가입", url: "/signup" }],
  buttonValue: [],
  imgValue: [],
};

export default SignIn;

const SignInDiv = styled.div`
  width: 682px;
  padding: 50px 120px;
  margin: 160px auto;
  border: 1px solid #d9d9d9;

  input {
    width: 100%;
    border: 0;
    border-bottom: 1px solid #ebebeb;
    height: 58px;
    font-size: 15px;
    color: #181818;
    border-radius: 0;
    background-color: transparent;
    -webkit-border-radius: 0;
    vertical-align: middle;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .logInBtn {
    outline: 0;
    width: 100%;
    display: block;
    background-color: #3f3fff;
    font-size: 0.9375rem;
    font-weight: 600;
    color: #fff;
    height: 3.125rem;
    text-align: center;
    line-height: 3.125rem;
    margin-bottom: 0.625rem;
    height: 62px;
    line-height: 62px;
    font-size: 18px;
    border: none;
  }

  a {
    padding: 30px 0;
    display: block;
    text-align: right;
    width: 100%;
    height: 100%;
    font-size: 0.8rem;
    color: #929292;
  }

  .kakaoBtn {
    outline: 0;
    width: 100%;
    display: block;
    background-color: #fae102;
    font-size: 0.9375rem;
    font-weight: 600;
    color: #000;
    height: 3.125rem;
    text-align: center;
    line-height: 3.125rem;
    margin-bottom: 0.625rem;
    height: 62px;
    line-height: 62px;
    font-size: 18px;
    border: none;
  }
`;
