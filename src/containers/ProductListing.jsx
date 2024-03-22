import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent'
import { setProducts } from '../redux/actions/productActions'
export default function ProductListing() {
    const products=useSelector((state)=>state)
    const dispatch=useDispatch()
    console.log(products)
    const fetchProducts=async()=>{
        const response=await axios.get("https://fakestoreapi.com/products").catch((err)=>{
            console.log("Err",err)
        })
        dispatch(setProducts(response.data))
    }
    useEffect(()=>{
        fetchProducts()
    },[])
    console.log("Products:",products)
  return (
    <div>
      <ProductComponent/>
    </div>
  )
}