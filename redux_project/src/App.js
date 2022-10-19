import './App.css';
import React from 'react';
import Home from './Pages/Home'
import Payment from './Pages/Payment'
import {
  BrowserRouter,
  Routes ,
  Route,

} from "react-router-dom";

import Cart from './Pages/Cart'
import NavBar from './Component/NavBar';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  console.log("store",store)
  return (
    <div className="App">

      <Provider store= {store}>
            <NavBar/>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/cart" element={<Cart />} />
                    <Route path="/payment" element={<Payment />} />
                    
                </Routes>
            </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
