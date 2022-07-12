import {Fragment, useEffect, useState} from 'react'
import { Helmet } from "react-helmet";
import AllOrdersCard from '../Components/AllOrdersCard'

export default function Products() {



	const [orders, setOrders] = useState([])
	// const navigate = useNavigate()





useEffect(() => {
		fetch("https://sleepy-temple-49038.herokuapp.com/capstone2/allOrders/",{
			headers: {
			
				Authorization: `Bearer ${localStorage.getItem("token")}`
			},
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)

			setOrders(data.map(orders => {
				return(
					<AllOrdersCard 
			key={orders._id}
			productProp={orders}/>
			)		
			}))
		})

	}, [])

	return(
		<div>
		 <Helmet>
        <style>{"body { background-color: silver; }"}</style>
      </Helmet>
		<div className="productsBackground mt-3 mb-3 " style={{ border: '8px solid black' }}>
		<Fragment >
		
		<h1 className=" mt-2 pt-4 pl-5 ml-5" style={{fontFamily: "Lato"}}>All Orders</h1>
		<hr/>
				
				<div className="d-flex flex-row flex-wrap m-3 mt-2 justify-content-center">
				{orders}
				</div>
				
	
		</Fragment>
		</div>
		</div>
		);
}