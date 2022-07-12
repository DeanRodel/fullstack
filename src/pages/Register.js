import {Form, Button, Container} from 'react-bootstrap'
import {useState, useEffect, useContext} from 'react'
import UserContext from '../UserContext'
import { Helmet } from "react-helmet";
import {Navigate, useNavigate} from 'react-router-dom'


import Swal from 'sweetalert2'


export default function Register (){

	const {user} = useContext(UserContext)
	const navigate = useNavigate()


	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	
	const [email, setEmail] = useState("")
	const [mobileNo, setMobileNo] = useState("")
	const[Password1, setPassword1] = useState("");
	const[Password2, setPassword2] = useState("");
	

	const[isActive, setIsActive] = useState(false);


	function registerUser(e){

		e.preventDefault()

		fetch("https://sleepy-temple-49038.herokuapp.com/capstone2/checkEmail", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email
			})
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)

			if(data === true){
				Swal.fire({
					title: "Duplicate email found",
					icon: "error",
					text: "Kindly provide another email to complete the registration"
				})
			} else{
				fetch("https://sleepy-temple-49038.herokuapp.com/capstone2/register", {
					method: "POST",
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						firstName: firstName,
						lastName: lastName,
						email: email,
						mobileNo: mobileNo,
						password: Password1
					})
				})
				.then(res => res.json())
				.then(data => {
					if(data === true){
						setFirstName("")
						setLastName("")
						setEmail("");
						setMobileNo("")
						setPassword1("");
						setPassword2("");

						Swal.fire({
							title: 'Registration Successfull',
							icon: 'success',
							text: 'Welcome Window Shoppers'
						})
						 .then((result) => {
                 		 navigate('/login')
               			 })
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

	
	}

	useEffect(() => {
	
		if((firstName !== "" && lastName !== "" && email !== "" && mobileNo.length === 11 && Password1 !== "" && Password2 !== "") && (Password1 === Password2)){
			setIsActive(true)
		}else{
			setIsActive(false)
		}
	}, [firstName, lastName, mobileNo, email, Password1, Password2])


	return(
		(user.id !== null) ?
		<Navigate to="/products" />
		:
		<div>
		 <Helmet>
        <style>{"body { background-color: silver; }"}</style>
      </Helmet>
		<Container className="d-flex">

		<Container className="background-oranges positioning">
		<img src="https://www.digisailor.com/assets/img/services-details/ecommerce.gif" 
		style={{height: 640}}
		alt="shown for register"
		className="RegisterImage"/>
		</Container>

		<Container className="background-orange">

		<Form onSubmit={(e) => registerUser(e)}>
		<h1 className="Font text-center mt-1">Register</h1>


		<div className="ml-2  ">
		<Form.Group 
		className="mb-3 ml-3" 
		controlId="firstName">

		  <Form.Label>First Name:</Form.Label>
		  <Form.Control 
		  style={{ width: 300 }}
		  type="text" 
		  placeholder="Enter First Name"
		  value={firstName}
		  onChange={e => setFirstName(e.target.value)}

		  required />
		</Form.Group>
	


	
		<Form.Group 
		className="mb-3 ml-3" 
		controlId="lastName ">

		  <Form.Label>Last Name</Form.Label>
		  <Form.Control 
		  style={{ width: 300 }}
		  type="text" 
		  placeholder="Enter Last Name"
		  value={lastName}
		  onChange={e => setLastName(e.target.value)}

		  required />
		</Form.Group>
		


		
		  <Form.Group 
		  	className="mb-3 ml-3" 
		  	controlId="userEmail"

		  >
		    <Form.Label>Email address</Form.Label>
		    <Form.Control 
		    style={{ width: 300 }}
		    type="email" 
		    value={email}
		    onChange={e =>{ 
		    	setEmail(e.target.value)
		    	// console.log(e.target.value)
		    }}
		    placeholder="Enter email"
		    required />
		    <Form.Text className="text-muted">
		      We'll never share your email with anyone else.
		    </Form.Text>
		  </Form.Group>
		


		 
		  <Form.Group 
		  className="mb-3 ml-3" 
		  controlId="moileNo">

		    <Form.Label>Mobile Number</Form.Label>
		    <Form.Control 
		    style={{ width: 300 }}
		    type="text" 
		    placeholder="Enter Mobile Number"
		    value={mobileNo}
		    onChange={e => setMobileNo(e.target.value)}

		    required />
		  </Form.Group>
	


		
		  <Form.Group 
		  className="mb-3 ml-3" 
		  controlId="password1">

		    <Form.Label>Password</Form.Label>
		    <Form.Control
		    style={{ width: 300 }} 
		    type="password" 
		    placeholder="Password"
		    value={Password1}
		    onChange={e => setPassword1(e.target.value)}

		    required />
		  </Form.Group>
	


	
		   <Form.Group 
		   className="mb-3 ml-3" 
		   controlId="password2">
		    <Form.Label>Verify Password</Form.Label>
		    <Form.Control 
		    style={{ width: 300 }}
		    type="password" 
		    placeholder="Password"
		    value={Password2}
		    onChange={e => setPassword2(e.target.value)}
		    required
		     />
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