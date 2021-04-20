import React, { useState, useRef, useCallback } from 'react';

import SearchResult from './SearchResult';
import useBookSearch from './useBookSearch';

const Search = () => {
  const [query, setQuery] = useState('');
  const [pageNum, setPageNum] = useState(1);
  const observer = useRef();

  const {
    books,
    isLoading,
    hasMoreResults,
    hasError,
  } = useBookSearch(query, pageNum);

  const lastBookElementRef = useCallback(node => {
    if (isLoading) {
      return;
    } else if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMoreResults) {
        setPageNum(prevPageNum => ++prevPageNum);
      }
    });

    if (node) observer.current.observe(node);
  }, [isLoading, hasMoreResults]);

  const handleSearch = e => {
    e.preventDefault();
    setQuery(e.target.value);
    setPageNum(1);
  };

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder={'Ex: Macbeth, Toni Morrison, etc.'}
      />
      {books.map((book, i) => (
        <div
          key={book.title + i}
          ref={i === books.length - 1 ? lastBookElementRef : null}
        >
          <SearchResult book={book}/>
        </div>
      ))}
      <div>{isLoading && 'Loading . . . '}</div>
      <div>{hasError && 'An error has occurred. Please refresh and try again.'}</div>
      <div>{(query && !isLoading && !hasMoreResults) && 'That is all the books I could find! :)'}</div>
    </>
  );
};

export default Search;