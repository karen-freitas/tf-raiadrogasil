import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ListEmployees from './pages/ListEmployees/index.js';
import Register from './pages/Register';
import Cep from './pages/Cep.js/index.js';


export default function App() {
  return (
    <>
      <header>
        <h1>Header</h1>
      </header>
      <section className="page-container">
        <aside>
          Sidebar
        </aside>

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
