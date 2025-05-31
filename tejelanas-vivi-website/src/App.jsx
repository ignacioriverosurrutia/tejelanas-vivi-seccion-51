import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
// Importa otros componentes de página aquí según los necesites (ej: Productos, Contacto)

function App() {
  return (
    <Router>
      <Header /> {/* Componente de cabecera visible en todas las páginas */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Agrega otras rutas aquí */}
          {/* <Route path="/productos" element={<Productos />} /> */}
          {/* <Route path="/contacto" element={<Contacto />} /> */}
        </Routes>
      </main>
      <Footer /> {/* Componente de pie de página visible en todas las páginas */}
    </Router>
  );
}

export default App;
