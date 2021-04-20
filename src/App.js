import React, { useState } from 'react';
import useBookSearch from './useBookSearch';

const App = () => {
  const [query, setQuery] = useState('');
  const [pageNum, setPageNum] = useState(1);

  const handleSearch = e => {
    e.preventDefault();
    setQuery(e.target.value);
    setPageNum(1);
  };

  const {
    books,
    isLoading,
    hasMoreResults,
    hasError,
  } = useBookSearch(query, pageNum);

  return (
    <>
      <input type="text" onChange={handleSearch}></input>
      {books.map((book, i) => (
        <div key={book.title + i}>{book.title}</div>
      ))}
      <div>{isLoading && 'Loading . . . '}</div>
      <div>{hasError && 'Error . . . '}</div>
    </>
  );
};

export default App;