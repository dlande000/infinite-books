import { useState, useEffect } from 'react';
import axios from 'axios';

const useBookSearch = (q, page) => {
  useEffect(() => {
    let cancel;

    axios({
      method: 'GET',
      url: 'http://openlibrary.org/search.json',
      params: { q, page },
      cancelToken: new axios.CancelToken(c => cancel = c),
    }).then(res => {
      console.log(res);
    }).catch(e => {
      if (axios.isCancel(e)) return;
    });

    return () => cancel();
  }, [q, page]);

  return null;
};

export default useBookSearch;