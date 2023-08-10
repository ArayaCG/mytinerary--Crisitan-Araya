import React from 'react'
import personaImg from '/person-fill.svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css'
import {Link as LinkAnchor} from "react-router-dom"

export default function Navs() {

  return (
    <Navbar bg="light" data-bs-theme="light"  sticky="top" collapseOnSelect expand="sm" >
      <Container>
        <Navbar.Brand href="#home">My Tinerary</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkAnchor to={'/'} className='linkAnchor'>Home</LinkAnchor>
            <LinkAnchor to={'/cities'} className='linkAnchor'>Cities</LinkAnchor>
            <div className="login">
            <LinkAnchor to={'/login'} className='linkAnchor'>
              <button className='buttonA'>
              <img src={personaImg} alt="persona" className='logo'/>Login
              </button>
            </LinkAnchor>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}