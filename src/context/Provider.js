import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getApi from '../services/getApi';
import context from './context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterPlanets, setFilterPlanets] = useState([]);

  const planetData = async () => {
    const planets = await getApi();
    setData(planets);
    setFilterPlanets(planets);
  };

  useEffect(() => {
    planetData();
  }, []);

  const contextValue = {
    filterPlanets,
  };

  return (
    <context.Provider value={ contextValue }>
      { children }
    </context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
