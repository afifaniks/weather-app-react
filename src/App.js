import React from 'react';
import Weather from './weather';
import { MyNav } from './components/navbar';
import Dashboard from './components/dashboard';
import './App.css';

function getLocation() {
  if (navigator.geolocation) {
    console.log(navigator.geolocation.getCurrentPosition(showPosition));
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  console.log("Latitude: " + position.coords.latitude +
  " Longitude: " + position.coords.longitude);
}

function App() {
  getLocation();
  return (
    <div className="App">
      <MyNav />
      <Dashboard />
      <Weather />
    </div>
  );
}

export default App;
