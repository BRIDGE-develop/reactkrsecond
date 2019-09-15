import React from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Button
} from "reactstrap";

const Header: React.FC = (): JSX.Element => {
  return (
    <Navbar color="dark" light expand="md">
      <NavbarBrand href="/">reactstrap</NavbarBrand>
      {/* <NavbarToggler onClick={this.toggle} /> */}
      <NavbarToggler />
      <Collapse navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/list">
              <Button color="secondary">New Post</Button>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
