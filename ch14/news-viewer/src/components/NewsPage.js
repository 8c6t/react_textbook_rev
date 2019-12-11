import React from 'react';
import { useParams } from 'react-router-dom';

import Categories from './Categories_Route';
import NewsList from './NewsList';

const NewsPage = () => {
  const { category = 'all' } = useParams();

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
