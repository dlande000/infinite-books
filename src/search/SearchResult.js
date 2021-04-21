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

/*

Our Covers API provides a programmatic method to access the book covers and author photos available in the Open Library Covers Repository.

Guidelines for Cover Use
Please, do not crawl our cover API. If you do, we may decide to block your crawl. Our covers are available for download in bulk on archive.org (example), but, it's a bit of a jungle in there, and is updated regularly.
If you want to display covers on public-facing pages, please use a src URL that points to covers.openlibrary.org. For example, if you'd like to call a cover using an ISBN, you can do it like this:
<img src="http://covers.openlibrary.org/b/isbn/9780385533225-S.jpg" />
A courtesy link back to Open Library is appreciated, whether it be on each individual book's page (where you can link back to the book's page on Open Library, for example, using the same ISBN http://openlibrary.org/isbn/9780385533225), or on your About page or in your footer.
Thanks!

How To
Book covers can be accessed using Cover ID (internal cover ID), OLID (Open Library ID), ISBN, OCLC, LCCN and other identifiers like librarything and goodreads.

The covers are available in 3 sizes:

S: Small, suitable for use as a thumbnail on a results page on Open Library,
M: Medium, suitable for display on a details page on Open Library and,
L: Large
The URL pattern to access book covers is:

http://covers.openlibrary.org/b/$key/$value-$size.jpg

Where:

key can be any one of ISBN, OCLC, LCCN, OLID and ID (case-insensitive)
value is the value of the chosen key
size can be one of S, M and L for small, medium and large respectively.
By default it returns a blank image if the cover cannot be found. If you append ?default=false to the end of the URL, then it returns a 404 instead.

The following example returns small sized cover image for book with ISBN 0385472579.

http://covers.openlibrary.org/b/isbn/0385472579-S.jpg

The same cover can be accessed in multiple ways using different keys:


http://covers.openlibrary.org/b/id/240727-S.jpg
http://covers.openlibrary.org/b/olid/OL7440033M-S.jpg
http://covers.openlibrary.org/b/isbn/0385472579-S.jpg
http://covers.openlibrary.org/b/isbn/9780385472579-S.jpg
http://covers.openlibrary.org/b/lccn/93005405-S.jpg
http://covers.openlibrary.org/b/oclc/28419896-S.jpg
http://covers.openlibrary.org/b/goodreads/979250-S.jpg
http://covers.openlibrary.org/b/librarything/192819-S.jpg
Author Photos
Author photos can be accessed using OLID and ID.

The URL Pattern for accessing author photos is:

http://covers.openlibrary.org/a/$key/$value-$size.jpg

For example the following is the photograph of Donald E. Knuth from the Open Library.


http://covers.openlibrary.org/a/olid/OL229501A-S.jpg

*/