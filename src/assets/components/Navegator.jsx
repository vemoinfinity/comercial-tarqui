import { Container, Image, Nav, Navbar, Stack } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link } from "react-router-dom";
import useContext from "../../context/useContext";

const Navegator = () => {
  const {database}= useContext("logocomercial")
  return ( 
      <Navbar collapseOnSelect expand="md" bg="primary" variant="dark" className="fixed-top">
        <Container className="navigator">
        <Navbar.Brand to="/" as={Link}><Image className='logo' src={database} /></Navbar.Brand>     
        </Container>
      </Navbar>
  )
}
export default Navegator;