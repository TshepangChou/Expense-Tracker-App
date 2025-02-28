import './App.css';
import React, { useState } from 'react';
import './styles.css';
import Navbar from "./components/Navbar";

/*function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className={darkMode ? 'dark' : ''}>
      <button className="btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <h1>Expense Tracker</h1>
    </div>
  );
}*/
function App() {
  return (
    /*<div className="min-h-screen bg-background text-text">
      <header className="bg-primary text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">Expense Tracker</h1>
      </header>
      <main className="p-6">
        <p>Track your expenses efficiently with a modern UI.</p>
      </main>*/
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      {/* Rest of your app */}
    </div>
  );
}

export default App;