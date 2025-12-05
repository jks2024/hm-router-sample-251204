import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 500px;
  margin: 0 auto;
  flex-direction: column;
  background-color: antiquewhite;
  padding: 10px 30px;
`;

const SignUp = () => {
  // 이메일
  const [inputEmail, setInputEmail] = useState(""); // 이메일
  const [inputPw, setInputPw] = useState(""); // 비밀번호
  const [name, setName] = useState(""); // 이름

  const nav = useNavigate(); // 페이지 이동

  // 회원 가입 버튼 눌렀을 때
  const onClickSignUp = () => {
    localStorage.setItem("email", inputEmail); // 웹브라우저 내부 저장소, 저장되면 계속 유지 됨
    localStorage.setItem("pw", inputPw);
    // 로그인 페이지로 이동
    nav("/");
  };

  return (
    <Container>
      <input
        type="text"
        placeholder="이메일"
        onChange={(e) => setInputEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="비밀번호"
        onChange={(e) => setInputPw(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="이름"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <br />
      <button onClick={onClickSignUp}>회원 가입</button>
    </Container>
  );
};
export default SignUp;
