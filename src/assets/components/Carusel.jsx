import React from 'react';
import { Carousel, Container} from 'react-bootstrap';
const Carusel = () => {
  return (
    <Container className='carousel pt-4' fluid="lg">
      <Carousel>
      <Carousel.Item >
      <img  src="./image/comercial1.JPG" />
      </Carousel.Item>
      <Carousel.Item>
      <img className=' d-block w-100"' src="./image\comercial2.JPG" />
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100"' src="./image\fotocomercial.JPG" />
      </Carousel.Item>
    </Carousel> 
    </Container>
  );
};

export default Carusel;