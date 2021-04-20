import { useState, useEffect } from 'react';
import axios from 'axios';

const useBookSearch = (q, page) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMoreResults, setHasMoreResults] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);

    let cancel;

    axios({
      method: 'GET',
      url: 'http://openlibrary.org/search.json',
      params: { q, page },
      cancelToken: new axios.CancelToken(c => cancel = c),
    }).then(res => {
      setBooks(prevBooks => [...prevBooks, ...res.data.docs]);
      setHasMoreResults(res.data.docs.length > 0);
      setIsLoading(false);
    }).catch(e => {
      if (axios.isCancel(e)) return;

      setHasError(true);
    });

    return () => cancel();
  }, [q, page]);

  useEffect(() => setBooks([]), [q]);

  return {
    books,
    isLoading,
    hasMoreResults,
    hasError,
  };
};

export default useBookSearch;