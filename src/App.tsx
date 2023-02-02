import React, { useEffect } from 'react';
import Router from './router/Router';
import './App.css';
import AutoplayContextProvider from './context/AutoplayContext';
import LayoutContextProvider from './context/LayoutContext';

function App() {
  useEffect(() => {
    document.title = "Imgur: The Magic of the Internet"
  })
  return (
   <LayoutContextProvider>
    <AutoplayContextProvider>
      <Router/> 
    </AutoplayContextProvider> 
    </LayoutContextProvider>  
  );
}

export default App;
