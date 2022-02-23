import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getPlanets } from '../services/functions';
import SWContext from './SWContext';

function SWProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');

  const globalState = {
    data,
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
  };

  useEffect(() => {
    getPlanets().then(({ results }) => setData(results));
  }, []);

  return (
    <SWContext.Provider value={ globalState }>
      { children }
    </SWContext.Provider>
  );
}

SWProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SWProvider;
