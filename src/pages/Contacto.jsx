import React, { useState, useCallback } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { CONTACT_INFO } from '../constants/data';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const validateForm = useCallback(() => {
    const newErrors = {};
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }
    
    if (formData.telefono && !/^\+?[0-9\s-]{8,}$/.test(formData.telefono)) {
      newErrors.telefono = 'El teléfono no es válido';
    }
    
    if (!formData.asunto.trim()) {
      newErrors.asunto = 'El asunto es requerido';
    }
    
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido';
    } else if (formData.mensaje.length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Limpiar error cuando el usuario comienza a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simular envío del formulario
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Formulario enviado:', formData);
      setShowAlert(true);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
      });
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setErrors({
        submit: 'Hubo un error al enviar el formulario. Por favor, intenta nuevamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Contacto</h1>

      <Row>
        <Col md={6} className="mb-4 mb-md-0">
          <h2>Información de Contacto</h2>
          <p className="lead">Estamos aquí para ayudarte</p>
          
          <div className="mt-4">
            <h5>Dirección</h5>
            <p>{CONTACT_INFO.direccion}</p>
          </div>
          
          <div className="mt-4">
            <h5>Teléfono</h5>
            <p>{CONTACT_INFO.telefono}</p>
          </div>
          
          <div className="mt-4">
            <h5>Email</h5>
            <p>{CONTACT_INFO.email}</p>
          </div>
          
          <div className="mt-4">
            <h5>Horario de Atención</h5>
            <p>Lunes a Viernes: {CONTACT_INFO.horario.diasLaborales}<br />
               Sábados: {CONTACT_INFO.horario.sabados}</p>
          </div>
        </Col>

        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ingresa tu nombre"
                isInvalid={!!errors.nombre}
              />
              <Form.Control.Feedback type="invalid">
                {errors.nombre}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ejemplo@correo.com"
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="+56 9 XXXX XXXX"
                isInvalid={!!errors.telefono}
              />
              <Form.Control.Feedback type="invalid">
                {errors.telefono}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Asunto</Form.Label>
              <Form.Control
                type="text"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                placeholder="¿En qué podemos ayudarte?"
                isInvalid={!!errors.asunto}
              />
              <Form.Control.Feedback type="invalid">
                {errors.asunto}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Escribe tu mensaje aquí..."
                isInvalid={!!errors.mensaje}
              />
              <Form.Control.Feedback type="invalid">
                {errors.mensaje}
              </Form.Control.Feedback>
            </Form.Group>

            {errors.submit && (
              <Alert variant="danger" className="mb-3">
                {errors.submit}
              </Alert>
            )}

            <Button 
              variant="primary" 
              type="submit" 
              className="w-100"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </Button>
          </Form>

          {showAlert && (
            <Alert variant="success" className="mt-3" onClose={() => setShowAlert(false)} dismissible>
              ¡Gracias por contactarnos! Te responderemos a la brevedad.
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto; 