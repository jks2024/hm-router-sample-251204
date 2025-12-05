import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>여기는 About 페이지 입니다.</h1>
      <Link to="/home">홈으로 이동</Link>
    </>
  );
};

export default About;
