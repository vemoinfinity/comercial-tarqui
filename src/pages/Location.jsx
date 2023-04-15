import React from 'react';
import { Col, Container, Figure, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Location = () => {
  return (
    <Container>
      <Row>
        <h1 className='py-4'><b>Comercial Tarqui 1</b></h1>
        <Col lg={9}>
          <Figure>
            <Figure.Image
              width='110%'
              height={300}
              alt="171x180"
              src="./image\ubi-ct1.png"
              className="rounded"
            />
          </Figure>
        </Col>
        <Col>
          <h2>
            <b>Ubicacion</b>
          </h2>
          <h4>
            Calle 113 Ave 104 Manta, Ecuador
          </h4>
          <a href="https://goo.gl/maps/w4HbnmcjkSu368Em7">
            <button
              style={{ width: '80%' }}
              type="submit"
              className="btn btn-outline-light m-3 ms-4" >
              <img className='redes' src="./image\icon-ubi.png" />MAPS
            </button>
          </a>
        </Col>
      </Row>
      <Row >
        <h1 className='py-4'><b>Comercial Tarqui 2</b></h1>
        <Col lg={9}>
          <Figure>
            <Figure.Image
              width='110%'
              height={300}
              alt="171x180"
              src="./image\ubi-ct2.png"
              className="rounded"
            />
          </Figure>
        </Col>
        <Col>
          <h2>
            <b>Ubicacion</b>
          </h2>
          <h4>
            Av. 103 y Calle 119 Manta, Ecuador
          </h4>
          <a href='https://goo.gl/maps/wiQxAhnZC4pmbLEt9'>
            <button style={{ width: '80%' }} type="button"
              className="btn btn-outline-light m-3 ms-4">
              <img className='redes' src="./image\icon-ubi.png" />MAPS
            </button>
          </a>
        </Col>
      </Row>

    </Container>
  );
};

export default Location;