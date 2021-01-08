import React, { useState } from "react";
import Form from "../SignIn/Components/Form";

const { Kakao } = window;

function MyPage() {
  const [accountForm] = useState(myFavorite);

  // 백엔드와 송신 통해 취향 기능 구현
  // const [genreData, setGenre] = useState();

  // useEffect(() => {
  //   fetch(`http://10.168.1.42:8000/users/taste/genre`, {
  //     method: "GET",
  //     headers: {
  //       Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.O3B5nLCE4HFsIwOkgtAAqXTZu_bFTcKb2Zl8zRDIGOc",
  //       Character: "2",
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(res => setGenre(res.RESULTS));
  // }, []);

  // useEffect(() => {
  //   fetch(`http://10.168.1.42:8000/users/taste/genre`, {
  //     method: "POST",
  //     headers: {
  //       Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.O3B5nLCE4HFsIwOkgtAAqXTZu_bFTcKb2Zl8zRDIGOc",
  //       Character: "2",
  //     },
  //     body: JSON.stringify({
  //       id: [1, 2, 3, 4, 5],
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(res => res.RESULTS);
  // }, []);

  //   return (
  //     <Form format={accountForm}>
  //       {genreData.map((genre, id) => {
  //         return <div key={id} albumInfo={genre[id].album} />;
  //       })}
  //     </Form>
  //   );
  // }

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
      <div>마이페이지</div>
      <div>계정정보</div>
      <button className="Button" />
      <button className="Button" />
      <button onClick={goToLogOut}> logout test</button>
      <Form format={accountForm} />
    </div>
  );
}

const myFavorite = {
  imgValue: [
    { id: 1, text: "아이유", alt: "아이유", src: "/" },
    { id: 2, text: "아이유", alt: "아이유", src: "/" },
    { id: 3, text: "아이유", alt: "아이유", src: "/" },
    { id: 4, text: "아이유", alt: "아이유", src: "/" },
    { id: 5, text: "아이유", alt: "아이유", src: "/" },
    { id: 6, text: "아이유", alt: "아이유", src: "/" },
  ],
  buttonValue: [],
  inputValue: [],
  linkValue: [],
};

// const myChar = {
//   imgValue: [{ id: 1, text: "아이유", alt: "아이유", src: "/" }],
//   buttonValue: [],
//   inputValue: [],
//   linkValue: [],
// };

export default MyPage;
