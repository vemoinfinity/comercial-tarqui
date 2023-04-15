import React from 'react';
import { Container } from 'react-bootstrap';
import Carusel from '../assets/components/Carusel';
import DescriptionMain from '../assets/components/DescriptionMain';
import MomentsDes from '../assets/components/MomentsDes';


const Home = () => {
  return (
    <Container>
      <div className='d-flex justify-content-center'>
      <h1 className='mt-3'><b>Bienvenidos a Comercial Tarqui</b></h1>    
      </div>
        <Carusel/>   
        <DescriptionMain/>  
        <MomentsDes/>
    </Container>
      
  );
};

export default Home;