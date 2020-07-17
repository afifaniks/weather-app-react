import React from 'react';
import Weather from './weather';
import './App.css';
import { MyNav } from './components/navbar';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div className="App">
      <MyNav />
      <Dashboard />
    </div>
  );
}

export default App;
