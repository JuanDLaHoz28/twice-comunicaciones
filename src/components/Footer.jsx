import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="text-white py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={4}>
            <iframe
              title="Mapa de ubicación"
              src="https://www.google.com/maps?q=Centro+Comercial+Viva+Barranquilla,+Atlántico,+Colombia&output=embed"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Col>
          <Col md={4} className="py-3 py-md-0">
            <h5 className="text-uppercase mb-4">Contacto</h5>
            <address className="mb-0">
              <p className="mb-2">
                <i className="fas fa-map-marker-alt me-2"></i>
                Centro Comercial Viva Barranquilla, Atlántico, Colombia.
              </p>
              <p className="mb-2">
                <i className="fas fa-phone me-2"></i>
                Teléfono: +57 317 823 33 33
              </p>
              <p className="mb-0">
                <i className="fas fa-envelope me-2"></i>
                Correo: contacto@twicecomunicaciones.cl
              </p>
            </address>
          </Col>
          <Col md={4} className="text-md-end">
            <h5 className="text-uppercase mb-4">Síguenos</h5>
            <div className="social-links">
              <a href="https://www.facebook.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.x.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com" className="text-white me-3" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com" className="text-white" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </Col>
        </Row>
        <hr className="my-4" />
        <div className="text-center">
          <small>DiseñoWeb + WebHosting: HOSTING COLOMBIA S.A.</small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
