import React from "react";
import * as BootComp from "react-bootstrap";

function NavBar() {
  return (
    <>
      <BootComp.Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <BootComp.Container>
          <BootComp.Navbar.Brand href="#home">
            Poke API Fetch
          </BootComp.Navbar.Brand>
          <BootComp.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <BootComp.Navbar.Collapse id="basic-navbar-nav">
            <BootComp.Nav className="me-auto">
              <BootComp.Nav.Link href="#home">Home</BootComp.Nav.Link>
              <BootComp.Nav.Link href="#link">Link</BootComp.Nav.Link>
              <BootComp.NavDropdown
                title="Dropdown"
                id="basic-nav-dropdown"
                menuVariant="dark"
              >
                <BootComp.NavDropdown.Item href="#action/3.1">
                  Action
                </BootComp.NavDropdown.Item>
                <BootComp.NavDropdown.Item href="#action/3.2">
                  Another action
                </BootComp.NavDropdown.Item>
                <BootComp.NavDropdown.Item href="#action/3.3">
                  Something
                </BootComp.NavDropdown.Item>
                <BootComp.NavDropdown.Divider />
                <BootComp.NavDropdown.Item href="#action/3.4">
                  Separated link
                </BootComp.NavDropdown.Item>
              </BootComp.NavDropdown>
            </BootComp.Nav>
          </BootComp.Navbar.Collapse>
        </BootComp.Container>
      </BootComp.Navbar>
    </>
  );
}

export default NavBar;
