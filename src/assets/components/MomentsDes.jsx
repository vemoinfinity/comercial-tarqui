import React from 'react';
import { Col, Container, Figure, Row } from 'react-bootstrap';
import useContext from "../../context/useContext";
const MomentsDes = () => {
  const {database:img}= useContext("1674165927256.JPG")
  const {database:img1}= useContext("1674165927231.JPG")
  const {database:img2}= useContext("1674165927189.JPG")
  const {database:img3}= useContext("1674165927169.JPG")
  const {database:img4}= useContext("1674165927131.JPG")
  return (
    <Container className='moments mt-3 '>
      <Row xs={1} lg={2}>
        <Col >
          <h2 className='my-3'><b>Momentos Destacados 2022</b></h2>
          <Row>
            <Col>
              <Figure>
                <Figure.Image
                  width={200}
                  height={200}
                  alt="171x180"
                  src={img}
                />
              </Figure>
            </Col>
            <Col>
              <Figure>
                <Figure.Image
                  width={200}
                  height={200}
                  alt="171x180"
                  src={img1}
                />
              </Figure>
            </Col>
          </Row>
        </Col>
        <Col>
          <h2 className='my-3'><b>Productos Destacados  </b></h2>
          <Row lg={3}> 
            <Col>             
              <Figure>
                <Figure.Image
                  width={100}
                  height={100}
                  alt="171x180"
                  src={img2}
                  />
              </Figure>             
            </Col>
            <Col>
              <Figure>
                <Figure.Image
                  width={100}
                  height={100}
                  alt="171x180"
                  src={img3}
                />
              </Figure>            
            </Col>
            <Col>
              <Figure>
                <Figure.Image
                  width={100}
                  height={100}
                  alt="171x180"
                  src={img4}
                  />
              </Figure>
              </Col>
          </Row>
        </Col>
      </Row>

    </Container>
  );
};

export default MomentsDes;