import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
const appVersion = "1.4";

console.log("tiramid Counter v"+appVersion);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);