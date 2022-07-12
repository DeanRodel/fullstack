import {Navbar, Nav, Container} from 'react-bootstrap'
import {Fragment, useContext} from 'react'
import {Link} from 'react-router-dom'
import UserContext from '../UserContext'


export default function AppNavBar(){

  const {user} = useContext(UserContext)
  console.log(user)

	return(
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top" >
  <Container className="navbar navbar-expand-lg navbar-dark  rounded-pill">
  <Navbar.Brand as={Link} to="/">WindowShoping</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />

  <Navbar.Collapse id="basic-navbar-nav">
   <Nav className="me-auto">

     <Nav.Link as={Link} to="/dminProducts">Products</Nav.Link>
     <Nav.Link as={Link} to="/adminAddProducts">Add Products</Nav.Link>
    
    
   </Nav>
 </Navbar.Collapse>
  </Container>
</Navbar>

	);
};