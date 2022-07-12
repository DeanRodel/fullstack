import './App.css';
import {Container} from 'react-bootstrap'
import Login from './pages/Login'
import {useState, useEffect} from 'react'
import {UserProvider} from './UserContext'
import AppNavBar from './Components/AppNavBar';
import Register from './pages/Register'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Products from './pages/Products'
import Home from './pages/Home'
import Logout from './pages/Logout'
import Orders from './pages/Orders'
import AdminAddProducts from './Components/AdminAddProducts'
import AdminNavBar from './Components/AdminNavBar'
import AllOrders from './pages/AllOrders'


function App() {

 const [user, setUser] = useState({
      id: null,
      isAdmin: null
  })

  //Function for clearing the localStorage on logout
  const unsetUser = ()=>{
    localStorage.clear()
  }



    useEffect(() => {
      fetch('https://sleepy-temple-49038.herokuapp.com/capstone2/details', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then(res => res.json())
      .then(data => {
        if(typeof data._id !== "undefined"){
          setUser({
            id: data._id,
            isAdmin: data.isAdmin
          })
        } else{
          setUser({
            id: null,
            isAdmin: null
          })
        }
      })
    }, [])



 return(
<UserProvider value={{user, setUser, unsetUser}}>

<Router>

  <AppNavBar />
  
  <Container>

  <Routes>
  
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/logout" element={<Logout/>}/>
    <Route path="/orders" element={<Orders/>}/>
    <Route path="/adminAddProducts" element={<AdminAddProducts/>}/>
    <Route path="/adminNavBar" element={<AdminNavBar/>}/>
    <Route path="/allOrders" element={<AllOrders/>}/>


{/*    // <Route path="/products" element={<Admin/>}/>*/}




  </Routes>
 
  </Container>

</Router>


</UserProvider>
  )
}

export default App;
