import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          {/* Penulisan 'Navbar.Brand' telah diperbaiki */}
          <Navbar.Brand href="/">FAHRI CINEMA</Navbar.Brand>
            <Nav>
              <Nav.Link href="#trending">TRENDING</Nav.Link>
              <Nav.Link href="#superhero">SUPER HERO</Nav.Link>
            </Nav>
          
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
