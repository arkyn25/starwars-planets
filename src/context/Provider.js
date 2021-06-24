import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getApi from '../services/getApi';
import context from './context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterPlanets, setFilterPlanets] = useState([]);
  const [filters, setFilters] = useState({
    name: '',
    value: 100000,
    column: 'population',
    comparison: 'maior que',
  });

  const planetData = async () => {
    const planets = await getApi();
    setData(planets);
    setFilterPlanets(planets);
  };

  useEffect(() => {
    planetData();
  }, []);

  const filterPlanetsByName = ({ target: { value } }) => {
    const filterData = data.filter(({ name }) => name.includes(value));

    setFilterPlanets(filterData);
  };

  const filterByNumericValues = ({ target: { name, value } }) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const filterButton = () => {
    const { number, column, comparison } = filters;

    const filteredData = data.filter((planet) => {
      const columnCompare = Number(planet[column]);
      const valueCompare = Number(number);
      if (comparison === 'maior que') {
        return columnCompare > valueCompare;
      }
      if (comparison === 'menor que') {
        return columnCompare < valueCompare;
      }
      return columnCompare === valueCompare;
    });
    setFilterPlanets(filteredData);
  };

  const contextValue = {
    filterPlanets,
    filterPlanetsByName,
    filterByNumericValues,
    filterButton,
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
