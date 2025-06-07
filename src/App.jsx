import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  const renderSection = () => {
    switch (activeSection) {
      case 'inicio':
        return (
          <>
            <Hero />
            <Services />
          </>
        );
      case 'nosotros':
        return <div className="py-5"><h2>Sobre Nosotros</h2></div>;
      case 'contacto':
        return <div className="py-5"><h2>Contacto</h2></div>;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
