import React from 'react';

const SearchResult = ({ book }) => {
  return (
    <>
      {book.title}
      {book.author_name ? (
        <>
          <div>
            {book.author_name.length > 1 ? "Authors:" : "Author:"}
          </div>
          {book.author_name.map(author => (
            <div>{author}</div>
          ))}
        </>
        ) : "No author provided"
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