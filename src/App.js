import React from 'react';
import './App.css';
import Display from './components/Display/Display.jsx';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header className="Home"/>
      <Display className="Hero"/>
    </div> 
    
  );
}

export default App;
