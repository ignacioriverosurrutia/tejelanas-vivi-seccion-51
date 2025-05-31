import React from 'react';
import { Link } from 'react-router-dom';
// Importa estilos de Bootstrap si es necesario

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Tejelanas Vivi</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              {/* Agrega más enlaces de navegación aquí */}
              {/* <li className="nav-item">
                <Link className="nav-link" to="/productos">Productos</Link>
              </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link" to="/contacto">Contacto</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
