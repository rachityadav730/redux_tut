import React, { useState, useEffect } from 'react';


const Product = () => {


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


  return (
    <div>
      <h1>
        Products
      </h1>
{
      products.map((product) => {
return(
        <div>
            <img src={product.image} style ={{height:"80px"}}/>
            <h4 ></h4>
            <h3>{product.title}</h3>
            <h3>{product.price}</h3>
            <button>Add to cart</button>
            </div>
       )})
    }
    </div>
  )
}

export default Product
