import React, { useContext } from 'react';
import SWContext from '../context/SWContext';
import { OPTIONS } from '../services/constants';

function NumericFilterForm() {
  const { setFilterByNumericValues,
    filterByNumericValues, column, comparison, value,
    setValue, setColumn, setComparison } = useContext(SWContext);

  const handleClick = () => {
    setFilterByNumericValues((prevFilter) => [
      ...prevFilter,
      { column: column || 'population', comparison, value },
    ]);
    setColumn('');
    setComparison('maior que');
    setValue('0');
  };

  return (
    <form>
      <label htmlFor="column">
        <select
          value={ column }
          data-testid="column-filter"
          id="column"
          onChange={ ({ target }) => setColumn(target.value) }
        >
          { OPTIONS
            .filter((option) => filterByNumericValues
              .every((filter) => filter.column !== option))
            .map((option) => (<option key={ option }>{ option }</option>))}
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          data-testid="comparison-filter"
          value={ comparison }
          id="comparison"
          onChange={ ({ target }) => setComparison(target.value) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="value">
        <input
          value={ value }
          onChange={ ({ target }) => setValue(target.value) }
          data-testid="value-filter"
          id="value"
          type="number"
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </form>
  );
}

export default NumericFilterForm;
