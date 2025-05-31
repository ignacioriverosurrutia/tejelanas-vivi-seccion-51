import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const QuienesSomos = () => {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Quiénes Somos</h1>
      
      <Row className="mb-5">
        <Col md={6} className="mb-4 mb-md-0">
          <img 
            src="https://via.placeholder.com/600x400?text=Tejelanas+Vivi" 
            alt="Tejelanas Vivi" 
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col md={6}>
          <h2>Nuestra Historia</h2>
          <p className="lead">
            Tejelanas Vivi nació del amor por el tejido y la artesanía en Laguna de Zapallar.
          </p>
          <p>
            Somos un emprendimiento familiar dedicado a la venta de insumos para tejido y a fomentar 
            la comunidad de tejedores en nuestra localidad. Nuestro objetivo es proporcionar 
            materiales de la más alta calidad y compartir nuestra pasión por el tejido con todos 
            nuestros clientes.
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Misión</Card.Title>
              <Card.Text>
                Proporcionar materiales de tejido de la más alta calidad y promover el arte del 
                tejido en nuestra comunidad, fomentando la creatividad y el desarrollo de 
                habilidades artesanales.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Visión</Card.Title>
              <Card.Text>
                Ser reconocidos como la tienda líder en insumos para tejido en Laguna de Zapallar, 
                siendo un referente en calidad y servicio al cliente.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Valores</Card.Title>
              <Card.Text>
                Calidad, compromiso, pasión por el tejido, atención personalizada y apoyo a la 
                comunidad local.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 className="text-center mb-4">Nuestro Compromiso</h2>
          <p className="text-center">
            En Tejelanas Vivi nos comprometemos a ofrecer productos de la más alta calidad, 
            asesoramiento personalizado y un servicio excepcional a todos nuestros clientes. 
            Nos enorgullece ser parte de la comunidad de tejedores y contribuir al desarrollo 
            de esta hermosa artesanía.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default QuienesSomos; 