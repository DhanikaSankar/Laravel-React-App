import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { stateContext } from "../contexts/ContextProvider";

function Header() {
    const { user } = useContext(stateContext);

    const logOut =(e)=>{
        e.preventDefault()

    }
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Contact Manager</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#">
                        <Link>Dashboard</Link>
                    </Nav.Link>
                    <Nav.Link href="#">
                        <Link>Users</Link>
                    </Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>Signed in as: {user.name}</Navbar.Text>
                    <a onClick={logOut} style={{color:"wheat", marginLeft:"10px"}}>Logout</a>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
