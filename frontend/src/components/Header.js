import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, Container} from 'react-bootstrap'
const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand >Learning Management System</Navbar.Brand>            
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <LinkContainer to='/login'>
                        <Nav.Link ><i className="fa fa-user"></i> Login</Nav.Link>
                    </LinkContainer>                    
                    <LinkContainer to='/Students'>
                        <Nav.Link ><i className="fa fa-child"></i> Students</Nav.Link>
                    </LinkContainer>                    
                    <LinkContainer to='/teachers'>
                        <Nav.Link ><i className="fa fa-user"></i> Teachers</Nav.Link>
                    </LinkContainer>                    
                    <LinkContainer to='/classes'>
                        <Nav.Link ><i className="fa fa-home"></i> Classes</Nav.Link>
                    </LinkContainer>                    
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}

export default Header