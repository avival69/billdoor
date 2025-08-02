import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between">
          <Link to="/" className="text-white font-bold">
            BillDoor
          </Link>
          <div>
            <Link to="/" className="text-white mr-4">
              Home
            </Link>
            <Link to="/login" className="text-white mr-4">
              Login
            </Link>
            <Link to="/signup" className="text-white">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;