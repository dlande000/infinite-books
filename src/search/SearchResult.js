import React from 'react';

const formatter = (arr, key) => {
  if (!arr) {
    return `No ${key} provided.`;
  }

  if (arr.length === 0) {
    return `${key[0].toUpperCase() + key.slice(1)}: ${arr[0]}`;
  } else if (arr.length > 3) {
    return `${key[0].toUpperCase() + key.slice(1)}s: ${arr.slice(0, 3).join(", ")}, and ${arr.length - 3} more`;
  } else {
    return `${key[0].toUpperCase() + key.slice(1)}s: ${arr.join(", ")}`;
  }
}

const SearchResult = ({
  title,
  author_name: authorName,
  publisher,
  isbn,
}) => {
  const formattedAuthorName = formatter(authorName, 'author');
  const formattedPublisher = formatter(publisher, 'publisher');
  const formattedIsbn = formatter(isbn, 'ISBN');

  return (
    <div className="box search-result">
      {isbn && (
        <img
          className="photo"
          alt={`${title} cover`}
          src={`http://covers.openlibrary.org/b/isbn/${isbn[0]}-M.jpg`}
        />
      )}
      <div className="book-info">
        <div id="title">{title}</div>
        <div>{formattedAuthorName}</div>
        <div>{formattedPublisher}</div>
        <div>{formattedIsbn}</div>
      </div>
    </div>
  )
}

export default SearchResult;
