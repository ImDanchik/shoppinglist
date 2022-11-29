import { Navbar, Container } from "react-bootstrap";

const NavBar = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://www.freepnglogos.com/uploads/bee-png/bee-conscious-catalyst-cosmic-buzz-conscious-catalyst-2.png"
            width="60"
            className="d-inline-block align-top"
          />{" "}
          Shekem
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default NavBar;
