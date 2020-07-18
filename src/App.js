import React from 'react';
import Weather from './weather';
import { MyNav } from './components/navbar';
import Dashboard from './components/dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyNav />
      <Dashboard />
      <Weather />
    </div>
  );
}

export default App;
