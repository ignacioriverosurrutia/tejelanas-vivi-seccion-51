import React, { useEffect, useState } from 'react';
import { Container, Carousel } from 'react-bootstrap';
 
const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [servicios, setServicios] = useState([]);
 
  useEffect(() => {
    const apiUrl = 'https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/products-services/';
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const token = 'ipss.get';
 
    fetch(proxyUrl + apiUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(response => {
        if (response.data) {
          if (Array.isArray(response.data.productos)) {
            setProductos(response.data.productos);
          }
          if (Array.isArray(response.data.servicios)) {
            setServicios(response.data.servicios);
          }
        } else {
          console.error('Respuesta inesperada:', response);
        }
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
        alert('No se pudieron cargar los productos y servicios.');
      });
  }, []);
 
  return (
<Container className="py-5">
<h1 className="text-center mb-5">Nuestros Productos</h1>
 
      {productos.length === 0 ? (
<div className="text-center py-5">
<h3>Cargando productos...</h3>
</div>
      ) : (
<Carousel className="mb-5">
          {productos.map((producto) => (
<Carousel.Item key={producto.id}>
<img
                className="d-block w-100"
                src={producto.imgs[0]}
                alt={producto.nombre}
                style={{ maxHeight: '500px', objectFit: 'cover' }}
              />
<Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
<h3>{producto.nombre}</h3>
<p>{producto.descripcion}</p>
<p><strong>Precio:</strong> ${producto.precio.toLocaleString()}</p>
                {producto.tallas.length > 0 && <p><strong>Tallas:</strong> {producto.tallas.join(', ')}</p>}
                {producto.colores.length > 0 && <p><strong>Colores:</strong> {producto.colores.join(', ')}</p>}
</Carousel.Caption>
</Carousel.Item>
          ))}
</Carousel>
      )}
 
      <h1 className="text-center mb-5">Nuestros Talleres</h1>
 
      {servicios.length === 0 ? (
<div className="text-center py-5">
<h3>Cargando talleres...</h3>
</div>
      ) : (
<Carousel>
          {servicios.map((servicio) => (
<Carousel.Item key={servicio.id}>
<img
                className="d-block w-100"
                src={servicio.imgs[0]}
                alt={servicio.nombre}
                style={{ maxHeight: '500px', objectFit: 'cover' }}
              />
<Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
<h3>{servicio.nombre}</h3>
<p><strong>Ubicación:</strong> {servicio.ubicacion}</p>
<p><strong>Fecha:</strong> {servicio.fecha}</p>
<p><strong>Cupos disponibles:</strong> {servicio.cupos}</p>
</Carousel.Caption>
</Carousel.Item>
          ))}
</Carousel>
      )}
</Container>
  );
};
 
export default Productos;