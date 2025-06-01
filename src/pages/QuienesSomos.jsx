import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import quienesSomosImg from '../assets/images/quienes-somos1.jpg'; // importa la imagen local
 
const QuienesSomos = () => {
  const [quienesSomosTexto, setQuienesSomosTexto] = useState('');
 
  useEffect(() => {
    const apiUrl = 'https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/about-us/';
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
        if (response.data && typeof response.data === 'string') {
          setQuienesSomosTexto(response.data);
        } else {
          console.error('Formato de respuesta inesperado:', response);
        }
      })
      .catch(error => {
        console.error('Error al obtener los datos de Quiénes Somos:', error);
        alert('No se pudo cargar la información de Quiénes Somos.');
      });
  }, []);
 
  return (
<Container className="py-5">
<h1 className="text-center mb-5">Quiénes Somos</h1>
 
      <Row className="mb-5">
<Col md={6} className="mb-4 mb-md-0">
<img
            src={quienesSomosImg}
            alt="Tejelanas Vivi"
            className="img-fluid rounded shadow"
          />
</Col>
<Col md={6}>
<h2>Nuestra Historia</h2>
          {quienesSomosTexto ? (
<p className="lead">{quienesSomosTexto}</p>
          ) : (
<p className="lead">Cargando información...</p>
          )}
</Col>
</Row>
</Container>
  );
};
 
export default QuienesSomos;