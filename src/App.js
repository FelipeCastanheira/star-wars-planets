import React from 'react';
import './App.css';
import Table from './components/Table';
import SWProvider from './context/SWProvider';

function App() {
  return (
    <SWProvider>
      <header>Olá</header>
      <Table />
    </SWProvider>
  );
}

export default App;
