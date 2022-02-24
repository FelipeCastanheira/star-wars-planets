import React, { useContext, useState } from 'react';

import SWContext from '../context/SWContext';
import { OPTIONS } from '../services/constants';

function OrderForm() {
  const { order, setOrder } = useContext(SWContext);
  const [firstInput, setFirstInput] = useState('population');
  const [secondInput, setSecondInput] = useState('ASC');

  // const handleChange = ({ target }) => {
  //   const { name, value } = target;
  //   setInput((prevInput) => ({ ...prevInput, [name]: value }));
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setOrder({ column: firstInput, sort: secondInput });
  // };

  return (
    <form>
      <label htmlFor="column-order">
        <select
          value={ order.column }
          data-testid="column-sort"
          id="column-order"
          name="column"
          onChange={ ({ target }) => setFirstInput(target.value) }
        >
          { OPTIONS
            .map((option) => (<option key={ option }>{ option }</option>))}
        </select>
      </label>
      <div>
        <label htmlFor="ASC">
          <input
            type="radio"
            id="ASC"
            data-testid="column-sort-input-asc"
            onChange={ ({ target }) => setSecondInput(target.value) }
            name="sort"
            value="ASC"
            defaultChecked
          />
          <span>Ascendente</span>
        </label>
        <label htmlFor="DESC">
          <input
            id="DESC"
            type="radio"
            data-testid="column-sort-input-desc"
            onChange={ ({ target }) => setSecondInput(target.value) }
            name="sort"
            value="DESC"
          />
          <span>Descendente</span>
        </label>
      </div>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ () => setOrder({ column: firstInput, sort: secondInput }) }
      >
        Ordenar
      </button>
    </form>
  );
}

export default OrderForm;
