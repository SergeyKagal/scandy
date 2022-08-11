import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { saveCart } from './utils/save-store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

window.addEventListener('unload', () => {
  saveCart();
});
