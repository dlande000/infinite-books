import React from 'react';

const AUTHOR = 'Author:';
const AUTHORS = 'Authors:';
const NO_AUTHOR_PROVIDED = 'No author(s) provided.';

const SearchResult = ({ book }) => {
  return (
    <>
      {book.title}
      {book.author_name ? (
        <>
          <div>
            {book.author_name.length > 1 ? AUTHORS : AUTHOR}
          </div>
          {book.author_name.map(author => (
            <div>{author}</div>
          ))}
        </>
        ) : NO_AUTHOR_PROVIDED
      }
      {/* {book.isbn && (book.author_name.map(author => (
        <div>{author}</div>
      )))}
      {book.publisher && (book.author_name.map(author => (
        <div>{author}</div>
      )))} */}
      <br/>
    </>
  )
}

export default SearchResult;