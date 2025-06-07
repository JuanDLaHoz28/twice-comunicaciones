import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


const Header = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'inicio', label: 'INICIO' },
    { id: 'nosotros', label: 'NOSOTROS' },
    { id: 'btl', label: 'BTL' },
    { id: 'merchandising', label: 'MERCHANDISING' },
    { id: 'produccion', label: 'PRODUCCIÓN' },
    { id: 'eventos', label: 'EVENTOS' },
    { id: 'consultoria', label: 'CONSULTORIA' },
    { id: 'comunicacion', label: 'COMUNICACIÓN DINÁMICA' },
    { id: 'contacto', label: 'CONTACTO' },
  ];

  return (
    <Navbar expand="lg" className="bg-light">
      <Container>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <FontAwesomeIcon 
            icon={faCircle} 
            className="me-2" 
            style={{ color: '#f7941d', fontSize: '2rem' }} 
          />
          <span className="fw-bold">TWICE</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navItems.map((item) => (
              <Nav.Link 
                key={item.id}
                href={`#${item.id}`}
                className={`mx-2 ${activeSection === item.id ? 'active text-orange' : 'text-muted'}`}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
