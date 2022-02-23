import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getPlanets } from '../services/functions';
import SWContext from './SWContext';

function SWProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  const globalState = {
    planets,
  };

  useEffect(() => {
    getPlanets().then((data) => setPlanets(data.results));
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
