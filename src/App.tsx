import React from 'react';
import Router from './router/Router';
import './App.css';
import AutoplayContextProvider from './context/AutoplayContext';
import LayoutContextProvider from './context/LayoutContext';

function App() {
  return (
   <LayoutContextProvider>
    <AutoplayContextProvider>
      <Router/> 
    </AutoplayContextProvider> 
    </LayoutContextProvider>  
  );
}

export default App;
