import React from 'react';
import './App.css';
import WIP from './assets/WIP.png'
import Nav from './components/nav/Nav';


function App() {
  return (
    <div className="app">
      <Nav/>
      <p>yo</p>
      <img src={WIP} alt="WIP"/>
    </div>
    
  );
}

export default App;
