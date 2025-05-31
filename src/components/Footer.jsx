import React from 'react';
// Importa estilos de Bootstrap si es necesario

const Footer = () => {
  return (
    <footer className="bg-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Tejelanas Vivi</h5>
            <p>Tu tienda de confianza para productos de tejido</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p>© 2024 Tejelanas Vivi</p>
            <p>Laguna de Zapallar, Chile</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 