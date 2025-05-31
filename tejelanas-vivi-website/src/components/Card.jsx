import React from 'react';
// Importa estilos de Bootstrap si es necesario

const Card = ({ imageUrl, title, description, product }) => {
  const handleContactClick = () => {
    // Aquí puedes redirigir a un formulario de contacto
    // o abrir un modal con información.
    // Para esta primera entrega, solo mostraremos un mensaje.
    alert(`Interesado en: ${product}`);
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button onClick={handleContactClick} className="btn btn-primary">Contáctanos</button>
      </div>
    </div>
  );
};

export default Card;
