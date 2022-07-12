import {Navbar, Nav, Container} from 'react-bootstrap'
import {useContext} from 'react'
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

     <Nav.Link as={Link} to="/">Home</Nav.Link>

     
{
       user.isAdmin === true?
       <Nav>

         <Nav.Link as={Link} to="/AdminAddProducts">Add Products</Nav.Link>
         <Nav.Link as={Link} to="/allOrders">All Orders</Nav.Link>
         <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
         </Nav>
       :
       
      
       <Nav>
         <Nav.Link as={Link} to="/products">Products</Nav.Link>
          <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
       </Nav>
    

     }
    
    
   </Nav>
 </Navbar.Collapse>
  </Container>
</Navbar>
	);
};