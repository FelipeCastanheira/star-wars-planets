import React from 'react';
import lightsaber from '../images/starwars-blue.png';

function Header() {
  return (
    <header>
      <div className="title">
        <h1>Projeto Star Wars - Trybe</h1>
        <img src={ lightsaber } alt="blue lightsaber" />
        <div className="empty" />
      </div>
    </header>
  );
}

export default Header;
