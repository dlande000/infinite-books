import React, { useState } from 'react';
import useBookSearch from './useBookSearch';

const App = () => {
  const [query, setQuery] = useState('');
  const [pageNum, setPageNum] = useState(1);

  const handleSearch = e => {
    e.preventDefault();
    setQuery(e.target.value);
    setPageNum(1);
  };

  useBookSearch(query, pageNum);

  return (
    <>
      <input type="text" onChange={handleSearch}></input>
      <div>example</div>
      <div>example</div>
      <div>example</div>
      <div>example</div>
      <div>example</div>
    </>
  );
};

export default App;