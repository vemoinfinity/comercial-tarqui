import { Container, Image, Nav, Navbar, Stack } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link } from "react-router-dom";

const Navegator = () => {

  return ( 
      <Navbar collapseOnSelect expand="md" bg="primary" variant="dark" className="fixed-top">
        <Container className="navigator">
        <Navbar.Brand to="/" as={Link}><Image className='logo' src="./image/firts-image.png" /></Navbar.Brand>     
        </Container>
      </Navbar>
  )
}
export default Navegator;