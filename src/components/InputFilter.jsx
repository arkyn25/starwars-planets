import React, { useContext } from 'react';
import context from '../context/context';

function InputFilter() {
  const { filterPlanetsByName } = useContext(context);

  return (
    <form action="">
      <fieldset>
        <legend>Filtrar por nome:</legend>
        <input
          type="text"
          name="planet"
          id="planet"
          data-testid="name-filter"
          onChange={ (ev) => {
            filterPlanetsByName(ev);
          } }
        />
      </fieldset>
    </form>
  );
}

export default InputFilter;
