import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar key="md" expand="md" sticky="top" className="NavigationBar">
      <Container>
        <Navbar.Brand href="#">R & J</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-md"
          aria-labelledby="offcanvasNavbarLabel-expand-md"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
              R & J
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#mempelai">Mempelai</Nav.Link>
              <Nav.Link href="#Info">Info</Nav.Link>
              <Nav.Link href="#Story">Story</Nav.Link>
              <Nav.Link href="#Gallery">Gallery</Nav.Link>
              <Nav.Link href="#RSVP">RSVP</Nav.Link>
              <Nav.Link href="#Gifts">Gifts</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
