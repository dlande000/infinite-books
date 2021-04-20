import React from 'react';

import Search from './search/Search';

const App = () => {
  return (
    <>
      <h1>infinite books.</h1>
      <div>This is the description for infinite books.</div>
      <ul>
        <li><a>Portfolio</a></li>
        <li><a>GitHub</a></li>
      </ul>
      <Search/>
    </>
  );
};

export default App;