import React from 'react'
import Nav from 'react-bootstrap/Nav'



export const NavBar = ()=>(

    <Nav className="justify-content-center"
  activeKey="/"
>
  <Nav.Item>
    <Nav.Link href="/">Add Todo</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/list">List</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="link-2">Search</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
)