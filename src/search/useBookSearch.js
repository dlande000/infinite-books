import { useState, useEffect } from 'react';
import axios from 'axios';

const URL = 'https://openlibrary.org/search.json';
const GET = 'GET';

const useBookSearch = (q, page) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMoreResults, setHasMoreResults] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (hasError) setHasError(false);

    let cancel;

    axios({
      method: GET,
      url: URL,
      params: { q, page },
      cancelToken: new axios.CancelToken(c => cancel = c),
    }).then(({ data: { docs }}) => {
      setBooks(prevBooks => prevBooks.concat(docs));
      setHasMoreResults(docs.length > 0);
      setIsLoading(false);
    }).catch(e => {
      if (axios.isCancel(e)) return;

      setHasError(true);
    });

    return () => cancel();
    // eslint-disable-next-line
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