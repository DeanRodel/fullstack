import {Fragment, useEffect, useState} from 'react'

import {Container, Carousel} from 'react-bootstrap'
import { Helmet } from "react-helmet";


import ProductsCard from '../Components/ProductsCard'

export default function Products() {



	const [products, setProducts] = useState([])
	// const navigate = useNavigate()





useEffect(() => {
		fetch("https://sleepy-temple-49038.herokuapp.com/capstone2/products/all/")
		.then(res => res.json())
		.then(data => {
			console.log(data)

			setProducts(data.map(products => {
				return(
					<ProductsCard 
			key={products._id}
			productProp={products}/>
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
		
		<h1 className=" mt-2 pt-4 ml-5" style={{fontFamily: "Lato"}}>Products</h1>

				<Container style={{backgroundColor: "#d3d3d3"}} className="mt-5 pb-4 mr-5 ">
				<div >
				 <Helmet>
		        <style>{"body { background-color: silver;}"}</style>
		      </Helmet>
			
				
					<h2 className="text-center pt-4" style={{color: "#13265C"}}>We have new Arrivals.</h2>

				<Container className="d-flex pt-3   ">

				<div className="mr-1">
					

					<div style={{height: 600}, {width: 350}}>
		      <h5 className="text-center">MR. LEE</h5>
						<Carousel fade>
		  <Carousel.Item>
		    <img
		      className="d-block w-100"
		      src="https://cf.shopee.ph/file/ec444dc409b7ea39c4c7aa36e3c50e1a"
		      alt="First slide"
		    />
		    <Carousel.Caption>
		      <h3>MR. LEE</h3>
		      <p>Original Brand Polo Shirt.</p>
		    </Carousel.Caption>
		  </Carousel.Item>
		  <Carousel.Item>
		    <img
		      className="d-block w-100"
		      src="https://cf.shopee.ph/file/cb52fe3df0f93560fbf8a3eccbcf27ed"
		      alt="Second slide"
		    />

		    <Carousel.Caption>
		      <h3>MR. LEE</h3>
		      <p>Original Brand Polo Shirt.</p>
		    </Carousel.Caption>
		  </Carousel.Item>
		  <Carousel.Item>
		    <img
		      className="d-block w-100"
		      src="https://cf.shopee.ph/file/55a662d02f30f8edfa05205ff005a278"
		      alt="Third slide"
		    />

		    <Carousel.Caption>
		      <h3>MR. LEE</h3>
		      <p>Original Brand Polo Shirt.</p>
		    </Carousel.Caption>
		  </Carousel.Item>
		</Carousel>
					</div>
				</div>


				<div >
				

					<div style={{height: 400}, {width: 350}}>
		      <h5 className="text-center">Lacoste</h5>
						<Carousel fade>
		  <Carousel.Item>
		    <img
		      className="d-block w-100"
		      src="https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-INT-Site/Sites-master/en/dwf88e7da9/L1212_UYA_20.jpg?imwidth=915&impolicy=product"
		      alt="First slide"
		    />
		    <Carousel.Caption>
		      <h3>Lacoste</h3>
		      <p>Original Brand Polo Shirt.</p>
		    </Carousel.Caption>
		  </Carousel.Item>
		  <Carousel.Item>
		    <img
		      className="d-block w-100"
		      src="https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-INT-Site/Sites-master/en/dwa84bbdfc/PH7723_BDM_20.jpg?imwidth=915&impolicy=product"
		      alt="Second slide"
		    />

		    <Carousel.Caption>
		      <h3>Lacoste</h3>
		      <p>Original Brand Polo Shirt.</p>
		    </Carousel.Caption>
		  </Carousel.Item>
		  <Carousel.Item>
		    <img
		      className="d-block w-100"
		      src="https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-INT-Site/Sites-master/en/dw20b84c28/PH4014_799_20.jpg?imwidth=915&impolicy=product"
		      alt="Third slide"
		    />

		    <Carousel.Caption>
		      <h3>Lacoste</h3>
		      <p>Original Brand Polo Shirt.</p>
		    </Carousel.Caption>
		  </Carousel.Item>
		</Carousel>
					</div>
				</div>


				<div className="ml-1">
				

					<div style={{height: 400}, {width: 350}}>
		      <h5 className="text-center">RRJ</h5>
						<Carousel fade>
		  <Carousel.Item>
		    <img
		      className="d-block w-100"
		      src="https://cdn.shopify.com/s/files/1/0031/1699/0576/products/ssph.zone-1622609456-16841018_m.jpg?v=1622609514"
		      alt="First slide"
		    />
		    <Carousel.Caption>
		      <h3>RRJ</h3>
		      <p>Original Brand Polo Shirt.</p>
		    </Carousel.Caption>
		  </Carousel.Item>
		  <Carousel.Item>
		    <img
		      className="d-block w-100"
		      src="https://ph-test-11.slatic.net/p/f928aa5689ceaa40a9e18699c25eb4ee.jpg"
		      alt="Second slide"
		    />

		    <Carousel.Caption>
		      <h3>RRJ</h3>
		      <p>Original Brand Polo Shirt.</p>
		    </Carousel.Caption>
		  </Carousel.Item>
		  <Carousel.Item>
		    <img
		      className="d-block w-100"
		      src="https://ph-live-01.slatic.net/p/f9de8948228a3197195f017aa1522162.jpg"
		      alt="Third slide"
		    />

		    <Carousel.Caption>
		      <h3>RRJ</h3>
		      <p>Original Brand Polo Shirt.</p>
		    </Carousel.Caption>
		  </Carousel.Item>
		</Carousel>
					</div>
				</div>

				</Container>

				</div>
		    {/*<div className="d-flex justify-content-center mt-4">
		    <Button variant="primary" style={{fontSize: 30}}>Shop Now</Button>
		    </div>*/}
				</Container>
				<div className="d-flex flex-row flex-wrap m-3 mt-2 justify-content-center">
				{products}
				</div>
				
	
		</Fragment>
		</div>
		</div>
		);
}