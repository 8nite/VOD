import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap';
import PropTypes from 'prop-types'

const Header = ({ changeFilter }) => (
  <header>
    <Navbar expand="lg" variant="dark" bg="dark">
      <Navbar.Brand className="mr-auto" href="#home">One Page Video Web App</Navbar.Brand>
      <Navbar.Toggle className="mr-auto" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="mr-auto" id="basic-navbar-nav">
        <Nav>
          <Nav.Link><Button onClick={changeFilter} variant="secondary" value=''>ALL</Button></Nav.Link>
          <Nav.Link><Button onClick={changeFilter} variant="primary" value='movies-comedy'>Comedy</Button></Nav.Link>
          <Nav.Link><Button onClick={changeFilter} variant="secondary" value='movies-biography'>Biography</Button></Nav.Link>
          <Nav.Link><Button onClick={changeFilter} variant="success" value='movies-action'>Action</Button></Nav.Link>
          <Nav.Link><Button onClick={changeFilter} variant="warning" value='movies-mystery'>Mystery</Button></Nav.Link>
          <Nav.Link><Button onClick={changeFilter} variant="danger" value='movies-horror'>Horror</Button></Nav.Link>
          <Nav.Link><Button onClick={changeFilter} variant="light" value='movies-drama'>Drama</Button></Nav.Link>
          <Nav.Link><Button onClick={changeFilter} variant="info" value='movies-crime'>Crime</Button></Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar className="ml-auto"><Button onClick={changeFilter} variant="secondary" value='history'>History</Button></Navbar>
    </Navbar>
  </header>
)

Header.propTypes = {
  changeFilter: PropTypes.func.isRequired
}

export default Header