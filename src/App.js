import React from 'react';
import './App.css';
import FilterList from './components/FilterList';
import Header from './components/Header';
import NameFilter from './components/NameFilter';
import NumericFilterForm from './components/NumericFilterForm';
import Table from './components/Table';
import SWProvider from './context/SWProvider';

function App() {
  return (
    <SWProvider>
      <Header />
      <NameFilter />
      <NumericFilterForm />
      <Table />
      <FilterList />
    </SWProvider>
  );
}

export default App;
