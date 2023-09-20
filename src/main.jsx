import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';
import './assets/styles/global.css';
import { NavBar } from './components/ui/NavBar';
import { Footer } from './components/ui/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <NavBar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
