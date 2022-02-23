import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getPlanets } from '../services/functions';
import SWContext from './SWContext';

function SWProvider({ children }) {
  const [data, setData] = useState([]);

  const globalState = {
    data,
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
