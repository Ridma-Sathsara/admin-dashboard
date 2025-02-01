import React from 'react';
import './App.css';
import Header from './components/Header'; 
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header /> 
        <Sidebar/>
        <Dashboard/>
      </div>
    </Router>
  );
}

export default App;
