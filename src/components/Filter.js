import React, { useEffect } from 'react';

const Filter = ({ active, setActive, setFiltered, result }) => {
  useEffect(() => {
    if (active === 'all') {
      setFiltered(result);
      return;
    }
    const filtered = result.filter(item => item.categories.includes(active));
    setFiltered(filtered);
  }, [active]);

  return (
    <div className='filter__container'>
      <button onClick={() => setActive()}>all</button>
      <button onClick={() => setActive('Photography')}>book</button>
      <button onClick={() => setActive('Hd07EAAAQBAJ')}>magazine</button>
    </div>
  );
};

export default Filter;
