import React, { useState } from "react";
import { useHistory } from "react-router";
import Form from "./Components/Form";

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
    const emailRuleSet = email.match(emailRule);
    const pwRuleSet = password.match(pwRule);
    const inputPass = emailRuleSet && pwRuleSet;

    setCheckEmail(emailRuleSet ? true : false);
    setCheckPassword(pwRuleSet ? true : false);
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

  const goToLogOut = () => {
    if (Kakao.Auth.getAccessToken()) {
      console.log("카카오 인증 액세스 토큰이 존재함", Kakao.Auth.getAccessToken());
      Kakao.Auth.goToLogOut(() => {
        console.log("로그아웃됨", Kakao.Auth.getAccessToken());
      });
    }
  };

  return (
    <div className="SignIn">
      <Form format={accountForm} onChange={handleIdPasswordInput} value={email} />
      <div className={checkEmail ? "inputStatus" : "displayNone"}>정확하지 않은 이메일입니다 </div>
      <div className={checkPassword ? "inputStatus" : "displayNone"}>정확하지 않은 비밀번호입니다</div>
      <button onClick={checkValidation}> login test</button>
      <button onClick={socialLogin}> social login test</button>
      <button onClick={goToLogOut}> logout test</button>
    </div>
  );
}

const signInProps = {
  inputValue: [
    { id: 1, name: "email", type: "id", placeholder: "아이디(이메일)" },
    { id: 2, name: "password", type: "password", placeholder: "비밀번호" },
    { id: 3, type: "checkbox", placeholder: "아이디 저장" },
  ],

  buttonValue: [
    { id: 1, text: "로그인" },
    { id: 2, text: "카카오 로그인" },
  ],

  linkValue: [
    { id: 1, text: "아이디 찾기", url: "/" },
    { id: 2, text: "비밀번호 찾기", url: "/" },
    { id: 3, text: "회원가입", url: "/signup" },
  ],
};

export default SignIn;
