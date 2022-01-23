import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import logo from '../../assets/logo.svg';

import './app.css';

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <img src={logo} className='app-logo' alt='logo' />
        <p> Welcome to the Biobot Test Kit Search App! </p>
      </header>

      <SearchBox />
    </div>
  );
}

export default App;
