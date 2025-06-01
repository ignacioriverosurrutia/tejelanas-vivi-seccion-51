import React, { useEffect, useState } from 'react';
import { Container, Accordion } from 'react-bootstrap';
 
const PreguntasFrecuentes = () => {
  const [preguntas, setPreguntas] = useState([]);
 
  useEffect(() => {
    const apiUrl = 'https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/faq/';
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
        if (Array.isArray(response.data)) {
          // Filtrar solo preguntas activas
          const activas = response.data.filter(p => p.activo);
          setPreguntas(activas);
        } else {
          console.error('Formato inesperado en la API FAQ:', response);
        }
      })
      .catch(error => {
        console.error('Error al obtener las preguntas frecuentes:', error);
        alert('No se pudieron cargar las preguntas frecuentes.');
      });
  }, []);
 
  return (
<Container className="py-5">
<h1 className="text-center mb-5">Preguntas Frecuentes</h1>
 
      <div className="row justify-content-center">
<div className="col-md-8">
<Accordion>
            {preguntas.length > 0 ? (
              preguntas.map((item, index) => (
<Accordion.Item key={item.id} eventKey={index.toString()}>
<Accordion.Header>{item.titulo}</Accordion.Header>
<Accordion.Body>{item.respuesta}</Accordion.Body>
</Accordion.Item>
              ))
            ) : (
<p className="text-center">Cargando preguntas...</p>
            )}
</Accordion>
</div>
</div>
 
      <div className="text-center mt-5">
<h3>¿No encontraste tu respuesta?</h3>
<p className="lead">
          No dudes en contactarnos directamente. Estamos aquí para ayudarte.
</p>
<a href="/contacto" className="btn btn-primary">
          Contáctanos
</a>
</div>
</Container>
  );
};
 
export default PreguntasFrecuentes;