import {Card, Button} from 'react-bootstrap';
import {useState, useEffect, useContext} from 'react';
import UserContext from '../UserContext'
import {Row, Col} from 'react-bootstrap'
import Swal from 'sweetalert2'
import {useParams, useNavigate, Link} from 'react-router-dom';

export default function ProductCard({productProp}) {

	const navigate = useNavigate()
const {productId, AddedToCart, _id} = productProp
	const {user} = useContext(UserContext)




		return(
		
		<Row className="m-3">
		<Col xs lg="12">
		<Card>
		<img src="https://cdn.dribbble.com/users/3475837/screenshots/11442860/media/8d53857df0ecda3b496bed2d012cbfd9.gif"
		style={{height: 200}} />
		<Card.Body>
			<Card.Title>{_id}</Card.Title>
			
			<Card.Text>{productId}</Card.Text>
		
			<Card.Text>{AddedToCart}</Card.Text>

			
	{
	user.id !== null || localStorage.getItem("token").isAdmin === true ?
	<Button variant="primary" disabled>Order</Button>
		: 
		<Link className="btn btn-danger" to="/login" disabled>Log in to order</Link>
						}

		</Card.Body>

		</Card>
		</Col>
		</Row>
		
	



	);
}