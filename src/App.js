import React from 'react';
import { MyNav } from './components/navbar';
import Dashboard from './components/dashboard'; 
import { Footer } from './components/footer';

function App() {
  return (
    <div className="App">
      <MyNav />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
