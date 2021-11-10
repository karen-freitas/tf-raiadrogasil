import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar.js';
import ListEmployees from './pages/ListEmployees/index.js';
import Register from './pages/Register/index';
import ContainerList from './components/ContainerList/ContainerList.js'
// import Header from './components/Header/Header.js'


export default function App() {
  return (
    <>
      <section className="page-container">
        <Sidebar />
        <main>
        <ContainerList>
          <Routes>
            <Route path="/" element={<ListEmployees />} />
            <Route path="/cadastro" element={<Register />} />
          </Routes>
        </ContainerList>
        </main>
      </section>
    </>
  );
}