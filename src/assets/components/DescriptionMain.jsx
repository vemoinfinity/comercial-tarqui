import React from 'react';
import { Button, Card, Col, Container, NavLink, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useContext from '../../context/useContext';
const DescriptionMain = () => {
  const {database:img}= useContext("whatsapp")
  const {database:img1}= useContext("face")
  const {database:img2}= useContext("insta")
  const {database:img3}= useContext("iconubi")
  return (
    <Container className='my-5' >
      <Row>
        <Col lg={4}>
          <Card className='description' style={{ width: 'auto' }}>
            <Card.Body>
              <Card.Title><h1><b>Redes Sociales</b></h1></Card.Title>
              <a href=''>
                <button style={{ width: '80%' }} type="button"
                  className="btn btn-outline-primary m-3 ms-4">
                  <img className='redes' src={img} />
                  Whastapp
                </button>
              </a>
              <a href='https://www.facebook.com/comercialtarquimanta'>
                <button style={{ width: '80%' }} type="button"
                  className="btn btn-outline-primary m-3 ms-4">
                  <img className='redes' src={img1} />
                  Facebook
                </button>
              </a>
              <a href='https://www.instagram.com/comercial_tarqui/'>
                <button style={{ width: '80%' }} type="button"
                  className="btn btn-outline-primary m-3 ms-4">
                  <img className='redes' src={img2} />
                  Instagram
                </button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={8}>
          <Card className='description' style={{ width: 'auto' }}>
            <Card.Body>
              <Card.Title> <h1><b>Comercial tarqui</b></h1></Card.Title>
              <Card.Text>
                <Card.Text>
                  <h4>Te esperamos en nuestro otro local <b>Los Esteros Calle 113 Ave 104 </b>
                    atras del mercado de los Esteros</h4>
                  <h5><b>Todo en viveres de primera necesidad con excelentes ofertas</b></h5>
                </Card.Text>
                <h4>Te esperamos en nuestro local <b>Los Esteros C.119 entre Av.103 y Av.102</b></h4>
                <h5><b>Todo en viveres de primera necesidad con excelentes ofertas</b></h5>
              </Card.Text>
              <NavLink to='/location' as={Link} className="d-flex justify-content-center">
                <button style={{ width: '300px' }}
              type="submit"
              className="btn btn-outline-primary m-3 ms-4" >
                <img className='redes' src={img3} />Ubicaciones
                </button>
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

  );
};

export default DescriptionMain;