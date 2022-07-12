import {Fragment, useEffect, useState} from 'react'

import {Container} from 'react-bootstrap'
import { Helmet } from "react-helmet";

import OrdersCard from '../Components/Orderscard'

export default function Orders() {



	const [orders, setOrders] = useState([])
	const [name, setName] = useState([])
	const [lastName, setLastName] = useState([])
	// const navigate = useNavigate()
	console.log(orders)




useEffect(() => {
		fetch("https://sleepy-temple-49038.herokuapp.com/capstone2/usersOrder/", {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`
			}
		})
		.then(res => res.json())
		.then(data => {
			// console.log(data)

			setName(data.firstName)
			setLastName(data.lastName)

			setOrders(
				data.orders.map(order => {
					return(

						<OrdersCard orderProp={order}
						key={order._id}/>

						)
				})
				)
		})

	}, [])

	return(
		<div>
		 <Helmet>
        <style>{"body { background-color: silver; }"}</style>
      </Helmet>
		<div className="productsBackground mt-3 mb-3" style={{ border: '8px solid black' }}>
		<Fragment >
		

		<h1 className=" mt-2 pt-4 ml-5" style={{fontFamily: "Lato"}}>Orders</h1>
		<br/>
		<h2 className="text-center">Orders of {name} {lastName}</h2>
				<Container style={{backgroundColor: "#ECECEC"}} className="mt-3 pb-4 mb-5">
				<div >
				 <Helmet>
		        <style>{"body { background-color: #C4C4C4;}"}</style>
		      </Helmet>

				</div>
				
				<div className="d-flex flex-row flex-wrap m-3 mt-2 justify-content-center">
				{orders}
				</div>
				</Container>
				
	
		</Fragment>

		</div>
		</div>
		);
}