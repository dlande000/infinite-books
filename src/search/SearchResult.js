import React from 'react';

const AUTHOR = 'Author: ';
const AUTHORS = 'Authors: ';
const NO_AUTHOR_PROVIDED = 'No author provided.';
const PUBLISHER = 'Publisher: ';
const PUBLISHERS = 'Publishers: ';
const NO_PUBLISHER_PROVIDED = 'No publisher provided.';
const ISBN = 'ISBN: ';
const ISBNS = 'ISBNs: ';
const NO_ISBN_PROVIDED = 'No ISBN provided.';

const SearchResult = ({ book }) => {
  let authors;
  let publisher;
  let isbn;

  if (book.author_name) {
    if (book.author_name.length > 1) {
      authors = AUTHORS;
    } else {
      authors = AUTHOR;
    }

    authors += book.author_name.join(', ');
  } else {
    authors = NO_AUTHOR_PROVIDED;
  }

  if (book.publisher) {
    if (book.publisher.length > 1) {
      publisher = PUBLISHERS;
    } else {
      publisher = PUBLISHER;
    }

    publisher += book.publisher.join(', ');
  } else {
    publisher = NO_PUBLISHER_PROVIDED;
  }

  if (book.isbn) {
    if (book.isbn.length > 1) {
      isbn = ISBNS;
    } else {
      isbn = ISBN;
    }

    isbn += book.isbn.join(', ');
  } else {
    isbn = NO_ISBN_PROVIDED;
  }

  return (
    <div className="box search-result">
      {book.isbn && (
        <img
          className="photo"
          alt={`${book.title} cover`}
          src={`http://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`}
        />
      )}
      <div className="book-info">
        <div id="title">{book.title}</div>
        <div>{authors}</div>
        <div>{publisher}</div>
        <div>{isbn}</div>
      </div>
    </div>
  )
}

export default SearchResult;
