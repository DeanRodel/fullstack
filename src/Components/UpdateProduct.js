import {Form, Button, Container} from 'react-bootstrap'
import {useState, useEffect, useContext} from 'react'
import UserContext from '../UserContext'
import { Helmet } from "react-helmet";
import {Navigate, useNavigate, useParams} from 'react-router-dom'


import Swal from 'sweetalert2'


export default function UpdateProduct (){

	const {user} = useContext(UserContext)
	const navigate = useNavigate()

	const {productId} = useParams()
	const [id, setId] = useState("")
	const [name, setName] = useState("")
	const [description, setDescription] = useState("")
	
	const [price, setPrice] = useState("")
	const [stocks, setStocks] = useState("")
	
	

	const[isActive, setIsActive] = useState(false);

	console.log(productId, "Use params")

	function updateProducts(e){
					e.preventDefault()

					fetch("https://sleepy-temple-49038.herokuapp.com/capstone2/products/checkProductId", {
						method: "POST",
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							id: id
						})
					})
					.then(res => res.json())
					.then(data => {
						console.log(data)

						if(data === true){
							
							fetch("https://sleepy-temple-49038.herokuapp.com/capstone2/products/updateProduct", {
								method: "PUT",
								headers: {
									'Content-Type': 'application/json',
									Authorization: `Bearer ${localStorage.getItem("token")}`
								},
								body: JSON.stringify({
									id: id,
									name: name,
									description: description,
									price: price,
									stocks: stocks
								})
							})
							.then(res => res.json())
							.then(data => {
								if(data === true){
									setId("")
									setName("")
									setDescription("")
									setPrice("");
									setStocks("")
									

									Swal.fire({
										text: 'Products Successfull Update',
										icon: 'success',
										
									})
									 // .then((result) => {
			       //           		 navigate('/login')
			       //         			 })
								} else{
									Swal.fire({
										title: 'Something went wrong',
										icon: "error",
										text: 'Please try again.'
									})
								}
							})
						}
					})

					//clear input fields
					
					// localStorage.setItem("email", email)

					// alert("Thank You for Registering")
				}


				//clear input fields
				
				// localStorage.setItem("email", email)

				// alert("Thank You for Registering")
			

	
	

	useEffect(() => {
	
		if(name !== "" && description !== "" && price !== "" && stocks !== "" ){
			setIsActive(true)
		}else{
			setIsActive(false)
		}
	}, [name, description, stocks, price])


	return(
		// (user.id !== null) ?
		// <Navigate to="/products" />
		// :
		<div>
		 <Helmet>
        <style>{"body { background-color: silver; }"}</style>
      </Helmet>
		<Container className="d-flex">

		<Container className="background-oranges positioning">
		<img src="https://www.digisailor.com/assets/img/services-details/ecommerce.gif" 
		style={{height: 640}}
		className="RegisterImage"/>
		</Container>

		<Container className="background-orange">

		<Form onSubmit={(e) =>updateProducts(e)}>
		<h1 className="Font text-center mt-1">Update Products</h1>


		<div className="ml-2  ">

		<Form.Group 
		className="mb-3 ml-3" 
		controlId="name">

		  <Form.Label>ID:</Form.Label>
		  <Form.Control 
		  style={{ width: 300 }}
		  type="text" 
		  placeholder="Enter Name"
		  value={id}
		  onChange={e => setId(e.target.value)}

		  required />
		</Form.Group>

		<Form.Group 
		className="mb-3 ml-3" 
		controlId="name">

		  <Form.Label>Name:</Form.Label>
		  <Form.Control 
		  style={{ width: 300 }}
		  type="text" 
		  placeholder="Enter Name"
		  value={name}
		  onChange={e => setName(e.target.value)}

		  required />
		</Form.Group>
	


	
		<Form.Group 
		className="mb-3 ml-3" 
		controlId="description ">

		  <Form.Label>Description</Form.Label>
		  <Form.Control 
		  style={{ width: 300 }}
		  type="text" 
		  placeholder="Enter Description"
		  value={description}
		  onChange={e => setDescription(e.target.value)}

		  required />
		</Form.Group>
		


		
		  <Form.Group 
		  	className="mb-3 ml-3" 
		  	controlId="stocks"

		  >
		    <Form.Label>Stocks</Form.Label>
		    <Form.Control 
		    style={{ width: 300 }}
		    type="Number" 
		    value={stocks}
		    onChange={e =>{ 
		    	setStocks(e.target.value)
		    	// console.log(e.target.value)
		    }}
		    placeholder="Enter Stocks"
		    required />
		  </Form.Group>
		


		 
		  <Form.Group 
		  className="mb-3 ml-3" 
		  controlId="price">

		    <Form.Label>Price</Form.Label>
		    <Form.Control 
		    style={{ width: 300 }}
		    type="NUmber" 
		    placeholder="Enter Mobile Number"
		    value={price}
		    onChange={e => setPrice(e.target.value)}

		    required />
		  </Form.Group>
	
		  </div>
	

		  <div className="d-flex justify-content-center">
	
		{
			isActive ?
			  <Button 
		  variant="primary" 
		  type="submit"
		  id="submitBtn"
		  style={{ width: 200 }} 
		  >
		    Submit
		  </Button>
		  :
		    <Button 
		  variant="danger" 
		  type="submit"
		  id="submitBtn"
		  style={{ width: 200 }} 
		  disabled
		  >
		    Submit
		  </Button>
		}
		</div>

		</Form>
		</Container>
		</Container>
		</div>

		);
}