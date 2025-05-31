import React from 'react';
// Importa estilos de Bootstrap si es necesario

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-4">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Tejelanas Vivi</h5>
            <p>
              Descripción breve o información de contacto.
            </p>
          </div>
          {/* Agrega más columnas si es necesario */}
        </div>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Tejelanas Vivi
      </div>
    </footer>
  );
};

export default Footer;
