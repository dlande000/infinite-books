import { useState, useEffect } from 'react';
import axios from 'axios';

const useBookSearch = (q, page) => {
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://openlibrary.org/search.json',
      params: { q, page },
    })
  }, [query, pageNumber]).then(res => {
    console.log(res);
  });

  return null;
};

export default useBookSearch;