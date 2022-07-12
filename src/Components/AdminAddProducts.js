import {Form, Button, Container} from 'react-bootstrap'
import {useState, useEffect} from 'react'

import { Helmet } from "react-helmet";



import Swal from 'sweetalert2'


export default function AddProducts (){





	const [name, setName] = useState("")
	const [description, setDescription] = useState("")
	
	const [price, setPrice] = useState("")
	const [stocks, setStocks] = useState("")
	
	

	const[isActive, setIsActive] = useState(false);


	function checkProduct(e){
				e.preventDefault()

				fetch("https://sleepy-temple-49038.herokuapp.com/capstone2/products/checkProduct", {
					method: "POST",
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						name: name
					})
				})
				.then(res => res.json())
				.then(data => {
					console.log(data)

					if(data === true){
						Swal.fire({
							title: "Duplicate product found",
							icon: "error",
							text: "Kindly provide another email to complete the registration"
						})
					} else{
						fetch("https://sleepy-temple-49038.herokuapp.com/capstone2/products/addProducts", {
							method: "POST",
							headers: {
								'Content-Type': 'application/json',
								Authorization: `Bearer ${localStorage.getItem("token")}`
							},
							body: JSON.stringify({
								name: name,
								description: description,
								price: price,
								stocks: stocks
							})
						})
						.then(res => res.json())
						.then(data => {
							if(data === true){
								setName("")
								setDescription("")
								setPrice("");
								setStocks("")
								

								Swal.fire({
									text: 'Products Successfull Added',
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
		<img src="https://www.digisailor.com/assets/img/projects/ecommerce.gif" 
		style={{height: 640}}
		alt="shown for admin add products"
		className="RegisterImage"/>
		</Container>

		<Container className="background-orange">

		<Form onSubmit={(e) =>checkProduct(e)} className="mt-5" >
		<h1 className="Font text-center mt-1" >Add a Product</h1>


		<div className="ml-2  ">
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