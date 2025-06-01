import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
 
// Importar imágenes estáticas
import quienesSomosImg from '../assets/images/quienes-somos.jpg';
 
const Home = () => {
  const [productosDestacados, setProductosDestacados] = useState([]);
  const [quienesSomosTexto, setQuienesSomosTexto] = useState('');
 
  useEffect(() => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const token = 'ipss.get';
 
    // Obtener productos
    fetch(proxyUrl + 'https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/products-services/', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(response => {
        if (response.data?.productos) {
          setProductosDestacados(response.data.productos.slice(0, 3));
        }
      })
      .catch(error => {
        console.error('Error al cargar productos destacados:', error);
      });
 
    // Obtener texto "quienes somos"
    fetch(proxyUrl + 'https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/about-us/', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(response => {
        if (typeof response.data === 'string') {
          setQuienesSomosTexto(response.data);
        }
      })
      .catch(error => {
        console.error('Error al cargar texto quienes somos:', error);
      });
  }, []);
 
  return (
<div className="home-page">
      {/* Hero Section */}
<section className="hero-section">
<Container>
<Row className="align-items-center min-vh-75">
<Col md={6} className="text-white">
<h1 className="display-4 fw-bold mb-4">Tejelanas Vivi</h1>
<p className="lead mb-4">
                Descubre el mundo del tejido con los mejores materiales y asesoría personalizada.
                Tu tienda especializada en insumos para tejido en Laguna de Zapallar.
</p>
<div className="d-flex gap-3">
<Link to="/productos">
<Button variant="light" size="lg">Ver Productos</Button>
</Link>
<Link to="/contacto">
<Button variant="outline-light" size="lg">Contáctanos</Button>
</Link>
</div>
</Col>
</Row>
</Container>
</section>
 
      {/* Quiénes Somos Section */}
<section className="quienes-somos-section py-5">
<Container>
<Row className="align-items-center">
<Col md={6}>
<div className="quienes-somos-image">
<img
                  src={quienesSomosImg}
                  alt="Tejelanas Vivi - Nuestra Historia"
                  className="img-fluid rounded shadow"
                />
</div>
</Col>
<Col md={6}>
<div className="quienes-somos-content">
<h2 className="mb-4">Quiénes Somos</h2>
<p className="lead mb-4">
                  {quienesSomosTexto || 'Cargando información...'}
</p>
<Link to="/quienes-somos">
<Button variant="primary">Conoce más sobre nosotros</Button>
</Link>
</div>
</Col>
</Row>
</Container>
</section>
 
      {/* Características */}
<section className="features-section py-5">
<Container>
<Row className="g-4">
<Col md={4}>
<Card className="h-100 feature-card">
<Card.Body className="text-center">
<i className="bi bi-truck feature-icon"></i>
<h3>Envío a Todo Chile</h3>
<p>Llevamos nuestros productos a todo el país con envíos seguros y rápidos.</p>
</Card.Body>
</Card>
</Col>
<Col md={4}>
<Card className="h-100 feature-card">
<Card.Body className="text-center">
<i className="bi bi-star feature-icon"></i>
<h3>Calidad Premium</h3>
<p>Seleccionamos los mejores materiales para garantizar la calidad de tus proyectos.</p>
</Card.Body>
</Card>
</Col>
<Col md={4}>
<Card className="h-100 feature-card">
<Card.Body className="text-center">
<i className="bi bi-people feature-icon"></i>
<h3>Asesoría Personalizada</h3>
<p>Te ayudamos a elegir los materiales perfectos para tu proyecto.</p>
</Card.Body>
</Card>
</Col>
</Row>
</Container>
</section>
 
      {/* Productos Destacados */}
<section className="featured-products py-5 bg-light">
<Container>
<h2 className="text-center mb-5">Productos Destacados</h2>
<Row className="g-4">
            {productosDestacados.map((producto) => (
<Col md={4} key={producto.id}>
<Card className="h-100 product-card">
<Card.Img
                    variant="top"
                    src={producto.imgs[0]}
                    alt={producto.nombre}
                    className="product-image"
                    loading="lazy"
                    style={{ objectFit: 'cover', height: '250px' }}
                  />
<Card.Body>
<Card.Title>{producto.nombre}</Card.Title>
<Card.Text>{producto.descripcion.slice(0, 100)}...</Card.Text>
<div className="d-flex justify-content-between align-items-center">
<span className="price">${producto.precio.toLocaleString('es-CL')}</span>
<Link to="/productos">
<Button variant="outline-primary">Ver más</Button>
</Link>
</div>
</Card.Body>
</Card>
</Col>
            ))}
</Row>
<div className="text-center mt-5">
<Link to="/productos">
<Button variant="primary" size="lg">Ver Todos los Productos</Button>
</Link>
</div>
</Container>
</section>
 
      {/* Testimonios */}
<section className="testimonials py-5">
<Container>
<h2 className="text-center mb-5">Lo que dicen nuestros clientes</h2>
<Row className="g-4">
<Col md={4}>
<Card className="h-100 testimonial-card">
<Card.Body>
<div className="testimonial-rating mb-3">{'★'.repeat(5)}</div>
<Card.Text>
                    "Excelente calidad en sus productos. La atención es personalizada y muy amable."
</Card.Text>
<Card.Footer className="bg-transparent border-0">
<small className="text-muted">- María González</small>
</Card.Footer>
</Card.Body>
</Card>
</Col>
<Col md={4}>
<Card className="h-100 testimonial-card">
<Card.Body>
<div className="testimonial-rating mb-3">{'★'.repeat(5)}</div>
<Card.Text>
                    "Las clases de tejido son increíbles. He aprendido mucho y los materiales son de primera calidad."
</Card.Text>
<Card.Footer className="bg-transparent border-0">
<small className="text-muted">- Juan Pérez</small>
</Card.Footer>
</Card.Body>
</Card>
</Col>
<Col md={4}>
<Card className="h-100 testimonial-card">
<Card.Body>
<div className="testimonial-rating mb-3">{'★'.repeat(5)}</div>
<Card.Text>
                    "La mejor tienda de insumos para tejido. Siempre tienen lo que necesito y más."
</Card.Text>
<Card.Footer className="bg-transparent border-0">
<small className="text-muted">- Ana Martínez</small>
</Card.Footer>
</Card.Body>
</Card>
</Col>
</Row>
</Container>
</section>
 
      {/* CTA Section */}
<section className="cta-section py-5 text-white text-center">
<Container>
<h2 className="mb-4">¿Listo para comenzar tu próximo proyecto?</h2>
<p className="lead mb-4">
            Visítanos en nuestra tienda o contáctanos para más información
</p>
<Link to="/contacto">
<Button variant="light" size="lg">Contáctanos</Button>
</Link>
</Container>
</section>
</div>
  );
};
 
export default Home;