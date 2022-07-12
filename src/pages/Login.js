import {Form, Button, Container} from 'react-bootstrap';
import {useState, useEffect, useContext} from 'react';
import UserContext from '../UserContext';
import {Navigate, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import React from 'react';
import { Helmet } from "react-helmet";



export default function Login(){

	const {user, setUser} = useContext(UserContext)
	const navigate = useNavigate()

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const[isActive, setIsActive] = useState(false);


	function loginUser(e){
		e.preventDefault()

		

		fetch("https://sleepy-temple-49038.herokuapp.com/capstone2/userLogin", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)

			if(typeof data.YourToken !== "undefined"){
				localStorage.setItem('token', data.YourToken)
				retrieveUserDetails(data.YourToken)
				setUser.token = data.YourToken
				console.log(data.YourToken, "token fetch from login")
				Swal.fire({
					title: "Login Successful",
					icon: "success",
					text: "Welcome to the Page"
				})
			}
			
			else{
				Swal.fire({
					title: "Authentication Failed",
					icon: "error",
					text: "Check your login details and try again"
				})
			}
		})

		setEmail("");
		setPassword("")

			
	}

	const retrieveUserDetails = (token) => {
		fetch('https://sleepy-temple-49038.herokuapp.com/capstone2/details', {
			headers: {
				Authorization: `Bearer ${ token }`
			}
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)
			setUser({
				id: data._id,
				isAdmin: data.isAdmin
			})
			if(data.isAdmin === true){
				navigate("/adminAddProducts")
			}
		})
		.catch(error=> {
			console.log(error, "error in retrieving user details")
		})
	}

	useEffect(() => {
		if(email !== "" && password !== ""){
			setIsActive(true)
		}else{
			setIsActive(false)
		}
	}, [email, password])

	const isBackgroundRed = true;




	return(

		(user.id !== null) ?
		<Navigate to="/products" />
		:
		 <div>
		 <Helmet>
        <style>{"body { background-color: silver; }"}</style>
      </Helmet>
		<Container>
		  <br/>
		<div className={isBackgroundRed ? 'background-orange' : 'background-blue'}>
		<br/>
		<hr

		    style={{
		      color: "black",
		      backgroundColor: "black",
		      height: 5,
		      
		    }}
		  />

		<Form onSubmit={(e) => loginUser(e)} className="Background mt-1">

		<h1 className="Font text-center"
		style={{fontSize: 50}}>Login to your account</h1>
		<br/>
		<br/>
		<br/>
	
		  <Form.Group 
		  	
		  	controlId="email"
		  	className="mt-4 text-center"


		  >
		    <h4 className="Fonts">Email address</h4>
		    <div className=" d-flex justify-content-center">
		    <Form.Control 
		    type="email"
		    style={{ width: 300 }}
		    
		    value={email}
		    onChange={e =>{ 
		    	setEmail(e.target.value)
		    	// console.log(e.target.value)
		    }}
		    placeholder="Enter email"
		    required />
		    </div>
		    <Form.Text className="text-muted">
		      We'll never share your email with anyone else.
		    </Form.Text>
		  </Form.Group>

		  <div className="d-flex justify-content-center">
		  <Form.Group 
		  className="mb-3" 
		  controlId="password">

		    <h4 className="d-flex justify-content-center Fonts">Password</h4>
		    <Form.Control 
		 
		    style={{ width: 300 }}
		    type="password" 
		    placeholder="Password"
		    value={password}
		    onChange={e => setPassword(e.target.value)}

		    required />
		  </Form.Group>
		  </div>


		{/**/}
		<div className="d-flex justify-content-center">
	
		{

			isActive ?
			  <Button 
			  
		  variant="primary" 
		  type="submit"
		  id="submitBtn"
		  className="mr-2"
		  >
		    Submit
		  </Button>

		  :
		    <Button 
		 
		  variant="danger" 
		  type="submit"
		  id="submitBtn"
		  className="mr-2"
		  disabled
		  >
		    Submit
		  </Button>
		  
		}
		
	
		</div>
		</Form>
		<hr
		    style={{
		      color: "black",
		      backgroundColor: "black",
		      height: 5
		    }}
		  />

		  <div className="d-flex flex-row justify-content-center">
		  <p className="mr-2 mt-2" style={{fontFamily: "lato"}}>if you dont have an account, proceed to </p>
		  		<Button className="mb-4" onClick={()=>
		                Swal.fire({
		                 title: "Welcome to Register page",
		                 icon: "success",
		                 text: "Proceed to register page"})
		                .then(navigate("/register"))}>Register</Button>

		   </div>
		  <br/>

		</div>
		</Container>
		</div>
		)


}