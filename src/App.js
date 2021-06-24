import React from 'react';
import './App.css';

import Provider from './context/Provider';
import Table from './components/Table';
import InputFilter from './components/InputFilter';

function App() {
  return (
    <Provider>
      <InputFilter />
      <Table />
    </Provider>
  );
}

export default App;
