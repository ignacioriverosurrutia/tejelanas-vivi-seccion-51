import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Card from '../components/Card';
import { PRODUCTOS } from '../constants/data';

const Productos = () => {
  const [categoria, setCategoria] = useState('todos');
  const [busqueda, setBusqueda] = useState('');

  const productosFiltrados = useMemo(() => {
    return PRODUCTOS.filter(producto => {
      const coincideCategoria = categoria === 'todos' || producto.categoria === categoria;
      const coincideBusqueda = producto.title.toLowerCase().includes(busqueda.toLowerCase()) ||
                              producto.description.toLowerCase().includes(busqueda.toLowerCase());
      return coincideCategoria && coincideBusqueda;
    });
  }, [categoria, busqueda]);

  const handleContactClick = (producto) => {
    alert(`Interesado en: ${producto.title}`);
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Nuestros Productos</h1>
      
      <Row className="mb-4">
        <Col md={6} className="mb-3 mb-md-0">
          <Form.Select 
            value={categoria} 
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="todos">Todas las categorías</option>
            <option value="lana">Lanas</option>
            <option value="kit">Kits</option>
            <option value="accesorios">Accesorios</option>
          </Form.Select>
        </Col>
        <Col md={6}>
          <Form.Control 
            type="search" 
            placeholder="Buscar productos..." 
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </Col>
      </Row>

      {productosFiltrados.length === 0 ? (
        <div className="text-center py-5">
          <h3>No se encontraron productos</h3>
          <p>Intenta con otros términos de búsqueda o categoría</p>
        </div>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {productosFiltrados.map((producto) => (
            <Col key={producto.id}>
              <Card
                imageUrl={producto.imageUrl}
                title={producto.title}
                description={producto.description}
                price={producto.price}
                onContactClick={() => handleContactClick(producto)}
              />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Productos; 