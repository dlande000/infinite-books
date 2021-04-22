import React, { useState, useRef, useCallback } from 'react';

import SearchResult from './SearchResult';
import useBookSearch from './useBookSearch';

const SMILE = ":)";

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
            <SearchResult {...book} />
          </div>
        ))}
      </div>
      {(isLoading && !hasError) && (
        <div className="box message" id="loading">
          Loading . . .
        </div>
      )}
      {hasError && (
        <div className="box message" id="error">
          An error has occurred. Please refresh and try again.
        </div>
      )}
      {(query && !isLoading && !hasMoreResults && Boolean(books.length)) && (
        <div className="box message" id="no-results">
          <div>That's everything for:</div>
          <div id="query">{query}</div>
          <div>Happy reading! {SMILE}</div>
        </div>
      )}
      {(!query && !isLoading) && (
        <div className="box message" id="loading">
          Use the search bar to find infinite books.
        </div>
      )}
      {(query && !isLoading && !books.length) && (
        <div className="box message" id="error">
          <div>No results for:</div>
          <div id="query">{query}</div>
        </div>
      )}
    </>
  );
};

export default Search;