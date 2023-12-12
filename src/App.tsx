import React from 'react';
import logo from './logo.svg';
import estilo from './App.module.css';

function App() {
  return (
    <div className={estilo.App}>
      <header className={estilo['App-header']}>
        <img src={logo} className={estilo['App-logo']} alt="logo" />
        <p>
          Olá mundo! Meu nome é Léo!
        </p>
        <a
          className={estilo['App-link']}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
