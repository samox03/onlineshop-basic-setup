import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownItem, NavbarText, Collapse, Nav, DropdownMenu } from 'reactstrap'

export default function NavBar() {

  return (

    <div>
      <Navbar
        color="light"
        expand="md"
        light
      >
            <NavbarBrand href="/">
      Your Fancy Onlineshop
    </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() { }} />
        <Collapse navbar>
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem>
              <NavLink href="/New/">
                New
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                External Link
              </NavLink>
            </NavItem>
            <UncontrolledDropdown
              inNavbar
              nav
            >
              <DropdownToggle
                caret
                nav
              >
                Collection
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  Winter
                </DropdownItem>
                <DropdownItem>
                  Summer
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Sale %
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>
            Welcome User
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>

  )
}