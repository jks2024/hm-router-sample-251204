import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
const NewsDomain = "https://newsapi.org/v2/top-headlines?country=us";

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
        const response = await axios.get();
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  });

  return <Container></Container>;
};

export default NewsList;
