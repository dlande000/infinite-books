import React from 'react';

import Search from './search/Search';

const App = () => {
  return (
    <>
      <h1>infinite books.</h1>
      <div>So much to read, so little time.</div>
      <div>This is the description for infinite books.</div>
      <div>This is the description for infinite books.</div>
      <ul>
        <li><a href={'google.com'}>Portfolio</a></li>
        <li><a href={'google.com'}>GitHub</a></li>
      </ul>
      <Search/>
    </>
  );
};

export default App;