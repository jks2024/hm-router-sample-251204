import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
const NEWS_DOMAIN = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";
const APIKEY = "ffbbc82f694941a7b0e2d4f4515abcc7";

const Container = styled.div`
  box-sizing: border-box;
  padding-bottom: 3em;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
`;

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(NEWS_DOMAIN + APIKEY);
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  });

  return (
    <Container>
      {articles &&
        articles.map((article) => (
          <NewsItem key={article.url} article={article} />
        ))}
    </Container>
  );
};

export default NewsList;
