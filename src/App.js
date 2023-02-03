import React from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './LoginScreen';
function App() {

  return (
    <div className="app">
      <Router>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
