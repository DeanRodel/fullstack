import {Card, Col, Row} from 'react-bootstrap';
import {Fragment} from 'react'



export default function ProductCard({orderProp}) {


	const {productId, AddedToCart, _id} = orderProp

	

		return(
		<Fragment>
		
		<Row className="m-3">
		<Col xs lg="12">
		<Card className="rounded">
		<img src="https://media.baamboozle.com/uploads/images/418816/1626151658_11110_gif-url.gif"
		style={{height: 200}}
		alt="shown for orders card" />
		<Card.Body >
			
			<Card.Title>{_id}</Card.Title>
			<Card.Subtitle>Product Id</Card.Subtitle>
			<Card.Text>{productId}</Card.Text>
			<Card.Subtitle>Date of Order</Card.Subtitle>
			<Card.Text>{AddedToCart}</Card.Text>
			<Card.Text>{}</Card.Text>
			
		</Card.Body>

		</Card>
		</Col>
		</Row>
		
		</Fragment>



	);
}