import React from 'react';
import { Carousel, Container} from 'react-bootstrap';
import useContext from '../../context/useContext';
const Carusel = () => {
  const {database:img}= useContext("comercial1")
  const {database:img1}= useContext("comercial2")
  const {database:img2}= useContext("publicomercial")
  return (
    <Container className='carousel pt-4' fluid="lg">
      <Carousel>
      <Carousel.Item >
      <img  src={img} />
      </Carousel.Item>
      <Carousel.Item>
      <img className=' d-block w-100"' src={img1}/>
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100"' src={img2} />
      </Carousel.Item>
    </Carousel> 
    </Container>
  );
};

export default Carusel;