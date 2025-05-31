import React from 'react';
import { Card as BootstrapCard, Button } from 'react-bootstrap';
import './Card.css';
// Importa estilos de Bootstrap si es necesario

const Card = ({ imageUrl, title, description, price, onContactClick }) => {
  return (
    <BootstrapCard className="h-100 shadow-sm product-card">
      <div className="image-container">
        <BootstrapCard.Img 
          variant="top" 
          src={imageUrl} 
          alt={title}
          className="product-image"
        />
      </div>
      <BootstrapCard.Body className="d-flex flex-column">
        <BootstrapCard.Title className="text-primary">{title}</BootstrapCard.Title>
        <BootstrapCard.Text className="flex-grow-1 description">
          {description}
        </BootstrapCard.Text>
        {price && (
          <BootstrapCard.Text className="fw-bold text-primary mb-3 price">
            ${price.toLocaleString('es-CL')}
          </BootstrapCard.Text>
        )}
        <Button 
          variant="outline-primary" 
          onClick={onContactClick}
          className="w-100 contact-button"
        >
          Consultar Disponibilidad
        </Button>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card; 