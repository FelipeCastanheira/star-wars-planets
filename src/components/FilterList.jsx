import React, { useContext } from 'react';

import SWContext from '../context/SWContext';

function FilterList() {
  const { filterByNumericValues,
    setFilterByNumericValues,
  } = useContext(SWContext);

  const removeFilter = (column) => {
    const newFilter = filterByNumericValues.filter((data) => data.column !== column);
    setFilterByNumericValues(newFilter);
  };

  return (
    <section>
      { filterByNumericValues.map(({ column, comparison, value }) => (
        <div key={ column } data-testid="filter">
          <span>{`${column} ${comparison} ${value}`}</span>
          <button
            onClick={ () => removeFilter(column) }
            type="button"
          >
            X
          </button>
        </div>
      ))}
      <button
        data-testid="button-remove-filters"
        type="button"
        disabled={ !filterByNumericValues.length }
        onClick={ () => setFilterByNumericValues([]) }
      >
        Remover Filtros
      </button>
    </section>
  );
}

export default FilterList;
