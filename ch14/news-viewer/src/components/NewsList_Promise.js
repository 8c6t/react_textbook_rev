import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NewsItem from './NewsItem';
import usePromise from '../libs/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    const apiKey = `&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

    return axios.get(
      'https://newsapi.org/v2/top-headlines?country=kr' + query + apiKey,
    );
  }, [category]);

  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  if (error) {
    return <NewsListBlock>에러 발생</NewsListBlock>;
  }

  const articles = response.data;
  return (
    <div>
      <NewsListBlock>
        {articles &&
          articles.map(article => (
            <NewsItem key={article.url} article={article} />
          ))}
      </NewsListBlock>
    </div>
  );
};

export default NewsList;
