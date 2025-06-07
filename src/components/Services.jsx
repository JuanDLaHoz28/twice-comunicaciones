import { Card, Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPaper, faUsers, faUserTie, faMugHot } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ServiceCard = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Col md={3} className="mb-4">
      <Card 
        className={`h-100 service-card ${isHovered ? 'shadow-lg' : 'shadow'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card.Body className="text-center p-4">
          <div className="icon-wrapper mb-3">
            <FontAwesomeIcon 
              icon={icon} 
              size="3x" 
              className={isHovered ? 'text-white' : 'text-orange'} 
            />
          </div>
          <Card.Title className="mb-3">{title}</Card.Title>
          <Card.Text className="mb-4">
            {description}
          </Card.Text>
          <div className="d-flex justify-content-center">
            <button className="btn btn-orange ver-mas-btn p-0 text-decoration-none">
              ver más <span className="ms-1">»</span>
            </button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

const Services = () => {
  const services = [
    {
      icon: faHandPaper,
      title: 'Servicio 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      icon: faUsers,
      title: 'Servicio 2',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      icon: faUserTie,
      title: 'Servicio 3',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      icon: faMugHot,
      title: 'Servicio 4',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="g-4">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
