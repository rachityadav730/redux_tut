import React from 'react'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
  
const NavBar = () => {
  return (
    <div>
      <h1>
        React Redux Tut
      </h1>

            <Router>
              <Link to="/" >Home</Link>
              <br>
              </br>
              <Link to="/cart">Cart</Link>
            </Router>

            
              
 

      
    </div>
  )
}

export default NavBar
