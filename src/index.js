import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals';

// https://7rdhmq5l-3000.usw3.devtunnels.ms/

// Librería Zustand, para manejo de estado
// https://zustand-demo.pmnd.rs/

const root = ReactDOM.createRoot(document.getElementById('root'));
// Esto es bastante ilegal en javascript
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Sin usar jsx el código es el siguiente
/* root.render(
  React.createElement(React.StrictMode, null, React.createElement(App, null))
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
