import React from 'react';

import Search from './search/Search';

const App = () => {
  return (
    <>
      <h1>infinite books.</h1>
      <div>So much to read, so little time.</div>
      <div>This is the description for infinite books.</div>
      <div>This is the description for infinite books. https://openlibrary.org/developers/api</div>
      <ul>
        <li><a href={'http://davidanderson.nyc/'}>Portfolio</a></li>
        <li><a href={'https://github.com/dlande000/infinite-books'}>GitHub</a></li>
      </ul>
      <Search/>
    </>
  );
};

export default App;