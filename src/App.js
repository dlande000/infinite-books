import React from 'react';

import Search from './search/Search';

const App = () => (
  <div id="app">
    <h1>infinite books.</h1>
    <div>So much to read, so little time.</div><br/>
    <div className="small-text">
      Need an infinite list of reading material? 
      Infinite Books uses the <a href="https://openlibrary.org/developers/api">Open Library API</a> to return as many books as can be found.
      Infinite Books was built by David Anderson to experiment with React Hooks, an infinite scroll, and Anime.js. 
      The repo for this page can be found <a href='https://github.com/dlande000/infinite-books'>here</a>.
    </div><br/>
    <div className="small-text">Happy infinite reading!</div><br/>
    <Search/>
  </div>
);

export default App;