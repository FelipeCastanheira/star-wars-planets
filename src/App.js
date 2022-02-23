import React from 'react';
import './App.css';
import Header from './components/Header';
import NameFilter from './components/NameFilter';
import Table from './components/Table';
import SWProvider from './context/SWProvider';

function App() {
  return (
    <SWProvider>
      <Header />
      <NameFilter />
      <Table />
    </SWProvider>
  );
}

export default App;
