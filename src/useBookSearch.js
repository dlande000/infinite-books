import { useState, useEffect } from 'react';
import axios from 'axios';

const useBookSearch = (q, page) => {
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://openlibrary.org/search.json',
      params: { q, page },
    }).then(res => {
      console.log(res);
    });
  }, [q, page]);

  return null;
};

export default useBookSearch;