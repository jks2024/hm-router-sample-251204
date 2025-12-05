import { useState } from "react";

const SignUp = () => {
  // 이메일
  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [name, setName] = useState("");

  // 회원가입 버튼

  const onClickSignUp = () => {
    localStorage.setItem("email", inputEmail);
    localStorage.setItem("pw", inputPw);
    // 로그인 페이지로 이동
  };
};
