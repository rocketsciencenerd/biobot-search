import React from 'react';
import {ToastContainer} from 'react-toastify';

import SearchBoxAndResult from '../SearchBoxAndResult/SearchBoxAndResult';
import logo from '../../assets/logo.svg';

import './app.css';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className='app'>
      <ToastContainer/>
      <header className='app-header'>
        <img className='app-logo' src={logo} alt='logo'/>
        <p className='app-header-text'> Welcome to the Biobot Test Kit Search App.</p>
        <span>
          Type your Shipping Label Id into the search box below, and click the search icon or select your label id from the dropdown.
        </span>
      </header>

      <SearchBoxAndResult/>
    </div>
  );
}
