import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar.js';
import ListEmployees from './pages/ListEmployees/index.js';
import Register from './pages/Register/index';

export default function App() {
  return (
    <>
      <section className="page-container">
        <Sidebar />

        <main>
          <Routes>
            <Route path="/" element={<ListEmployees />} />
            <Route path="/cadastro" element={<Register />} />
          </Routes>
        </main>
      </section>
    </>
  );
}