import React, { Component, useState } from "react"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';


export default (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="primary" dark expand="md">
                <NavbarBrand href="#">TodoApp</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#/todos">Tarefas</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#/about">Sobre</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>


    )
}