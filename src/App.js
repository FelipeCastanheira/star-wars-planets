import React from 'react';
import './App.css';
import SWProvider from './context/SWProvider';

function App() {
  return (
    <SWProvider>
      <header>Olá</header>
    </SWProvider>
  );
}

export default App;
