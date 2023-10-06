import React from 'react';
import './App.css';
import Signup from './Signup';
import Login from './login'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';




function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} /> {/* Use <Login /> component for '/' route */}
        <Route path='/Signup' element={<Signup />} /> {/* Use <Signup /> component for '/signup' route */}
        <Route path='/Home' element={<Home />} /> {/* Use <Login /> component for '/' route */}
      </Routes>
    </Router>
  );
}

export default App;
