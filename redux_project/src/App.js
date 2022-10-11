import './App.css';
import React from 'react';
import Home from './Pages/Home'
import {
  BrowserRouter as Router,
  Routes ,
  Route,

} from "react-router-dom";

import Cart from './Pages/Cart'
import NavBar from './Component/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
