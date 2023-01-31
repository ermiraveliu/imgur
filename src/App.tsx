import React from 'react';
import Router from './router/Router';
import './App.css';
import AutoplayContextProvider from './context/AutoplayContext';

function App() {
  return (
    <AutoplayContextProvider>
      <Router/> 
    </AutoplayContextProvider>  
  );
}

export default App;
