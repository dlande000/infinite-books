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
      <div id="results-container">
        {books.map((book, i) => (
          <div
            key={book.title + i}
            ref={i === books.length - 1 ? lastBookElementRef : null}
          >
            <SearchResult book={book}/>
          </div>
        ))}
      </div>
      {isLoading && (
        <div className="box" id="loading">Loading . . . </div>
      )}
      {hasError && (
        <div className="box" id="error">An error has occurred. Please refresh and try again.</div>
      )}
      {(query && !isLoading && !hasMoreResults) && (
        <div className="box" id="no-results">That is all the books I could find. Happy reading!</div>
      )}
    </>
  );
};

export default Search;