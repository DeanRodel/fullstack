import {Card, Button} from 'react-bootstrap';
import {useContext} from 'react';
import UserContext from '../UserContext'
import {Row, Col} from 'react-bootstrap'
import Swal from 'sweetalert2'
import {useParams, useNavigate, Link} from 'react-router-dom';

export default function ProductCard({productProp}) {

	const navigate = useNavigate()
	const {name, description, price, _id, stocks} = productProp
	const {user} = useContext(UserContext)
	const {productId} = useParams()

	const order = (productId) => {
		fetch("https://sleepy-temple-49038.herokuapp.com/capstone2/checkOut", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`
			},
			body: JSON.stringify({
				productId: _id
			})
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)

			if(data === true){
				Swal.fire({
					title: "Successfully orderd",
					icon: "success",
					text: "You have Successfully Orders for this product"
				})
				navigate("/orders")
			}else{
				Swal.fire({
					title: "Something went Wrong",
					icon: "error",
					text: "Please try again"
				})
			}

		})
	}



		return(
		
		<Row className="m-3">
		<Col xs lg="12">
		<Card>
		<img src="https://cdn.dribbble.com/users/216143/screenshots/4303183/trunk_animation.gif"
		style={{height: 200}} 
		alt="shown for productsCard"/>
		<Card.Body>
			<Card.Title>{name}</Card.Title>
			<Card.Subtitle>Description</Card.Subtitle>
			<Card.Text>{description}</Card.Text>
			<Card.Subtitle>Price</Card.Subtitle>
			<Card.Text>Php {price}</Card.Text>
			<Card.Text>Stocks {stocks}</Card.Text>
			
	{
	user.id !== null?
	<Button variant="primary" onClick={() => order(productId)}>Order</Button>
		: 
		<Link className="btn btn-danger" to="/login">Log in to order</Link>
						}

		</Card.Body>

		</Card>
		</Col>
		</Row>
		
	



	);
}