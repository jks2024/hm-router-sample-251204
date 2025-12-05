import styled from "styled-components";
import NewsItem from "./NewsItem";

const Container = styled.div`
  box-sizing: border-box;
  padding-bottom: 3em;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
`;

const sampleArticles = [
  {
    title: "오늘의 날씨",
    description: "오늘은 날씨가 추워요. 눈이 내힌 후 바닥이 미끄러워요~~~",
    url: "http://naver.com",
    urlToImage:
      "https://images.ft.com/v3/image/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F419dc3c7-cd5e-401c-804f-243f51afc9a3.jpg?source=next-barrier-page",
  },
  {
    title: "오늘의 날씨",
    description: "오늘은 날씨가 추워요. 눈이 내힌 후 바닥이 미끄러워요~~~",
    url: "http://naver.com",
    urlToImage:
      "https://images.ft.com/v3/image/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F419dc3c7-cd5e-401c-804f-243f51afc9a3.jpg?source=next-barrier-page",
  },
  {
    title: "오늘의 날씨",
    description: "오늘은 날씨가 추워요. 눈이 내힌 후 바닥이 미끄러워요~~~",
    url: "http://naver.com",
    urlToImage:
      "https://images.ft.com/v3/image/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F419dc3c7-cd5e-401c-804f-243f51afc9a3.jpg?source=next-barrier-page",
  },
  {
    title: "오늘의 날씨",
    description: "오늘은 날씨가 추워요. 눈이 내힌 후 바닥이 미끄러워요~~~",
    url: "http://naver.com",
    urlToImage:
      "https://images.ft.com/v3/image/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F419dc3c7-cd5e-401c-804f-243f51afc9a3.jpg?source=next-barrier-page",
  },
  {
    title: "오늘의 날씨",
    description: "오늘은 날씨가 추워요. 눈이 내힌 후 바닥이 미끄러워요~~~",
    url: "http://naver.com",
    urlToImage:
      "https://images.ft.com/v3/image/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F419dc3c7-cd5e-401c-804f-243f51afc9a3.jpg?source=next-barrier-page",
  },
];

const NewsList = () => {
  return (
    <Container>
      {sampleArticles &&
        sampleArticles.map((e, index) => <NewsItem key={index} article={e} />)}
    </Container>
  );
};

export default NewsList;
