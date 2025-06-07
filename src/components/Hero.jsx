import { Carousel } from 'react-bootstrap';
import { useState } from 'react';

const Hero = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="hero-section position-relative">
      <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
        <Carousel.Item>
          <div 
            className="d-block w-100 hero-image"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
              height: '500px',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-md-6 offset-md-6">
                  <div className="bg-white p-4 shadow">
                    <h1 className="display-4 fw-bold">LOREM IPSUM</h1>
                    <p className="lead">Soluciones integrales de comunicación y marketing</p>
                    <button className="btn btn-orange btn-lg mt-3">Conócenos</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      
      <div className="carousel-controls position-absolute w-100">
        <div className="container">
          <div className="d-flex justify-content-between">
            <button 
              className="btn btn-light rounded-circle arrow-btn"
            >
              ←
            </button>
            <button 
              className="btn btn-light rounded-circle arrow-btn"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
