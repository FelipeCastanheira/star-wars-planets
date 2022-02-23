import React, { useContext } from 'react';

import SWContext from '../context/SWContext';
import { OPTIONS } from '../services/constants';

function OrderForm() {
  const { order, setOrder } = useContext(SWContext);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setOrder((prevOrder) => ({ ...prevOrder, [name]: value }));
  };

  return (
    <form>
      <label htmlFor="column-order">
        <select
          value={ order.column }
          data-testid="column-order"
          id="column-order"
          name="column"
          onChange={ handleChange }
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
            onChange={ handleChange }
            name="sort"
            value="ASC"
          />
          <span>Ascendente</span>
        </label>
        <label htmlFor="DESC">
          <input
            id="DESC"
            type="radio"
            onChange={ handleChange }
            name="sort"
            value="DESC"
          />
          <span>Descendente</span>
        </label>
      </div>
      <button type="submit">Ordenar</button>
    </form>
  );
}

export default OrderForm;
