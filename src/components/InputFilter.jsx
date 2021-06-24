import React, { useContext } from 'react';
import context from '../context/context';

function InputFilter() {
  const { filterPlanetsByName,
    filterByNumericValues,
    filters,
    filterButton,
    value,
    comparison,
    column,
  } = useContext(context);

  return (
    <form action="">
      <fieldset>
        <legend>Filtrar por nome:</legend>
        <input
          type="text"
          data-testid="name-filter"
          onChange={ (ev) => {
            filterPlanetsByName(ev);
          } }
        />
      </fieldset>
      <fieldset>
        <legend>Filtrar por valores</legend>
        <select
          name="column"
          data-testid="column-filter"
          onChange={ filterByNumericValues }
          value={ column }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ filterByNumericValues }
          value={ comparison }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          name="number"
          data-testid="value-filter"
          onChange={ filterByNumericValues }
          value={ value }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ filterButton }
        >
          Filtrar

        </button>
      </fieldset>
    </form>
  );
}

export default InputFilter;
