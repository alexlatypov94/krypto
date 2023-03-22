import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/constants';
import './App.css';

const Crypto = lazy(() => {
  return import('./pages/Crypto').then((module) => ({
    default: module.default,
  }));
});

function App() {
  return (
    <div>
      <Routes>
        <Route path={ROUTES.main} element={<Crypto />} />
      </Routes>
    </div>
  );
}

export default App;
