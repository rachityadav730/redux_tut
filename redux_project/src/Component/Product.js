import React, { useState, useEffect } from 'react';


import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import {add,remove} from '../store/cartSlice'

const Product = () => {

  // const slect = useSelector()

  const dispatch =useDispatch()


    const [products,setproducts] =useState([])
    useEffect(()=>{

        const fetchProduct = async()=>{

            const res =await fetch('https://fakestoreapi.com/products')

            const data = await res.json();
            console.log("datadata",data)
            setproducts(data)
        }

        fetchProduct();

        console.log("useeffect rusn")

    },[])

    const AddtoCart =(product)=>{

      console.log("productproduct",product)

      dispatch(add(product))

    }


  return (
    <div>
      <h1>
        Products
      </h1>
      <div style={{display:"flex",flexWrap:"wrap"}}>
{
      products.map((product) => {
      return(
        
        <div style={{width:"30%",marginBottom:"5%"}}>
            <img src={product.image} style ={{height:"80px"}}/>
            <h4 ></h4>
            <h3>{product.title}</h3>
            <h3>{product.price}</h3>
            <button onClick={()=>AddtoCart(product)}>Add to cart</button>
         </div>
       )})
    }
    </div>
    </div>
  )
}

export default Product
