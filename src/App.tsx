import React, { useEffect } from 'react';
import Router from './router/Router';
import './App.css';
import AutoplayContextProvider from './context/AutoplayContext';
import LayoutContextProvider from './context/LayoutContext';
import PageContextProvider from './context/PageContext';

function App() {
  useEffect(() => {
    document.title = "Imgur: The Magic of the Internet"
  })
  return (
    <PageContextProvider>
      <LayoutContextProvider>
        <AutoplayContextProvider>
          <Router/> 
        </AutoplayContextProvider> 
      </LayoutContextProvider>  
    </PageContextProvider>
  );
}

export default App;
