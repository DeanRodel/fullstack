import {Row, Col, Button, Container, Carousel} from 'react-bootstrap'
import { Helmet } from "react-helmet";
import {Fragment} from 'react';
import {Form} from 'react-bootstrap';
import {useState, useEffect, useContext} from 'react';
import UserContext from '../UserContext';
import {Navigate, Link, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';





export default function Banner() {


  const navigate = useNavigate()

	return(

    
    <Fragment>
    <div className="d-flex ml-5 mt-4">
          <div style={{height: 800}, {width: 750}}>
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





<div className="ml-5">
<br/>
    <div className="ml-4 d-flex flex-row justify-content-end">
    <Button className="mr-4" variant="secondary" onClick={()=>
              Swal.fire({
               title: "Welcome to login page",
               icon: "success",
               text: "Proceed to login page"})
              .then(navigate("/login"))} >Login</Button>
    <Button variant="secondary" onClick={()=>
              Swal.fire({
               title: "Welcome to Register Page",
               icon: "success",
               text: "Proceed to register page"})
              .then(navigate("/register"))} >Register</Button>
    </div>
    <br/>
    <br/>
    
  <h5 className="text-center" style={{fontFamily: "dancing script"}}>WindowShopping.com</h5>

    <Row>
      <Col className="p-5">
        <h1>Welcome Window Shoppers!</h1>
        <p>You'll definitely shop till you drop!</p>
        <br/>
        <br/>
        <h5><a style={{color: "#1261A0"}}>FREE SHIPPING</a> ON ALL ITEMS</h5>
          <h6><a style={{color: "#1261A0"}}>20% OFF</a> ON SELECTED ITEMS</h6>
         
          {
            (localStorage === null)?

            <Button  
            onClick={()=>
              Swal.fire({
               title: "You must Login first",
               icon: "error",
               text: "Proceed to login page"})
              .then(navigate("/login"))} 
          variant="primary">
            Shop Now

            </Button>
           
            :
             <Button  
            onClick={()=>Swal.fire({
               title: "Welcome to the Page!",
               icon: "success",
               text: "Welcome to the Page"})
              .then(navigate("/products"))} 
            variant="primary">
            Shop Now</Button>         
          }

          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          
          

      </Col>
    </Row>
    </div>
   
</div>

		<Container style={{backgroundColor: "#d3d3d3"}} className= "mt-5 pb-4 mb-5">
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
    <div className="d-flex justify-content-center mt-4">
   
    {
            (localStorage === null)?

            < Button 
            style={{fontSize: 0}} 
            onClick={()=>
              Swal.fire({
               title: "You must Login first",
               icon: "error",
               text: "Proceed to login page"},
               navigate("/login")
              )} 
          variant="primary">
            Shop Now

            </Button>
            :
             <Button 
            style={{fontSize: 30}} 
            onClick={()=>navigate("/products")} 
            variant="primary">
            Shop Now</Button>         
          }



    </div>
		</Container>

    
     </Fragment>
		);
}