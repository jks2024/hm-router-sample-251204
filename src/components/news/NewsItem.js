// title : 기사 제목
// description : 내용
// url : 링크
// urlToImage : 뉴스 이미지
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1em;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3em;
  }
`;
