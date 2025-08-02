// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 👈 Import BrowserRouter
import App from './App';
import './index.css'; // Or your main css file

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>  {/* 👈 Wrap your App */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);