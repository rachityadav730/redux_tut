import React, { useState, useEffect } from 'react';
import useTitleCount from '../CustomHook/TitleCount';
import useFetch from '../CustomHook/useFetch';
import useCustomState from '../CustomHook/useCustomState'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import {add,remove} from '../store/cartSlice'

const Product = () => {

  // const slect = useSelector()
  const [count,setCount] =useState(0)
  const [initValue,setInitValue] =useCustomState(0)
  useTitleCount(count)
  const [data]  = useFetch("https://jsonplaceholder.typicode.com/todos")
  console.log("data1231231",data)

  // const TitleCount = useTitleCount()
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

      
      

      setCount(count+1)

      setInitValue(count+1)
      // initValue
      console.log("initValue",initValue)
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
