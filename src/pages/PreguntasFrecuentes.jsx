import React from 'react';
import { Container, Accordion } from 'react-bootstrap';

const PreguntasFrecuentes = () => {
  const preguntas = [
    {
      pregunta: "¿Qué tipos de lana ofrecen?",
      respuesta: "Ofrecemos una amplia variedad de lanas, incluyendo lana de alpaca, merino, acrílica y mezclas. Cada tipo de lana tiene sus propias características y usos específicos. Nuestro personal puede ayudarte a elegir la lana más adecuada para tu proyecto."
    },
    {
      pregunta: "¿Ofrecen clases de tejido?",
      respuesta: "Sí, ofrecemos clases para principiantes y avanzados. Las clases se realizan en grupos pequeños para asegurar una atención personalizada. También organizamos talleres especiales y eventos temáticos."
    },
    {
      pregunta: "¿Cómo puedo realizar un pedido?",
      respuesta: "Puedes realizar pedidos a través de nuestra tienda física, por teléfono o a través de nuestras redes sociales. Para pedidos personalizados, te recomendamos visitarnos en persona para discutir los detalles."
    },
    {
      pregunta: "¿Cuáles son los métodos de pago aceptados?",
      respuesta: "Aceptamos efectivo, transferencia bancaria y tarjetas de débito y crédito. También ofrecemos la opción de pago en cuotas para compras mayores a cierto monto."
    },
    {
      pregunta: "¿Realizan envíos a otras ciudades?",
      respuesta: "Sí, realizamos envíos a todo Chile. Los costos de envío varían según la ubicación y el peso del paquete. Para más información sobre envíos, contáctanos directamente."
    }
  ];

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Preguntas Frecuentes</h1>
      
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Accordion>
            {preguntas.map((item, index) => (
              <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header>{item.pregunta}</Accordion.Header>
                <Accordion.Body>
                  {item.respuesta}
                </Accordion.Body>
              </Accordion.Item>
            ))}
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