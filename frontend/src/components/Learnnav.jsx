import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Learnnav = () => {
    return (

        <Navbar collapseOnSelect expand="lg" className="" style={{backgroundColor:"#333",color:"white",backgroundcolor:"charcol",paddingTop:"15px",paddingBottom:"15px"
    }}>
            <Container>
                <Navbar.Brand href="#home" style={{color:"white"}}>Language Learning App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bg-white' />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link style={{color:"white"}} as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link style={{color:"white"}} as={Link} to="/register">Register</Nav.Link>
                        <Nav.Link style={{color:"white"}} as={Link} to="/login">Login</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Learnnav