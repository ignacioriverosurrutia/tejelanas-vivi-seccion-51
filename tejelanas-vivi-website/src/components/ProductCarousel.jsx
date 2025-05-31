import React from 'react';
import { Carousel } from 'react-bootstrap';
// Importa estilos de Bootstrap si es necesario

const ProductCarousel = ({ products }) => {
  return (
    <Carousel>
      {products.map((product, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={product.imageUrl}
            alt={product.title}
            // Considera optimización de imágenes aquí (tamaños, formatos)
          />
          <Carousel.Caption>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
