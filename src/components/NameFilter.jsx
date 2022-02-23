import React, { useContext } from 'react';
import SWContext from '../context/SWContext';

function NameFilter() {
  const { filterByName, setFilterByName } = useContext(SWContext);
  return (
    <label htmlFor="name-filter">
      <input
        id="name-filter"
        type="text"
        onChange={ ({ target }) => setFilterByName({ name: target.value }) }
        value={ filterByName.name }
        data-testid="name-filter"
        placeholder="Filtrar por nome"
      />
    </label>
  );
}

export default NameFilter;
