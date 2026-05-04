// src/main.jsx
// Entry point of the application - renders the App component into the DOM

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

// Find the root element in index.html
const rootElement = document.getElementById('root');

// Create a React root and render the App component
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);