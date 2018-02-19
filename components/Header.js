import Link from 'next/link';
import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const LinkStyle={
  marginRight: 15
}

const Header = () => (

    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">Micro-Finance</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href='/'>
               Home
        </NavItem>
        <NavDropdown eventKey={2} title="Group">
          <NavItem eventKey={2} href='/group'>Group</NavItem>
          <MenuItem eventKey={2.1} href='/create_group'>New Group</MenuItem>
        </NavDropdown>
        <NavItem eventKey={3} href='/about'>About Me
        </NavItem>
      </Nav>
    </Navbar>
)

export default Header
