import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Estudar React', 'Parar de procrastinar', 'Ganhar do Yoshida no Gartic', 'carai react é massa'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <ul>
        { tasks.map(e => task(e))}
      </ul>
      </header>
    </div>
  );
}

export default App;
