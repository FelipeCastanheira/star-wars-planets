import React from 'react';
import './App.css';
import FilterList from './components/FilterList';
import Header from './components/Header';
import NameFilter from './components/NameFilter';
import NumericFilterForm from './components/NumericFilterForm';
import OrderForm from './components/OrderForm';
import Table from './components/Table';
import SWProvider from './context/SWProvider';

function App() {
  return (
    <SWProvider>
      <Header />
      <NameFilter />
      <section className="filtersContainer">
        <NumericFilterForm />
        <OrderForm />
      </section>
      <FilterList />
      <Table />
    </SWProvider>
  );
}

export default App;
