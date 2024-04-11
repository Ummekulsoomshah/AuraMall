import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions/productActions'
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions'
import { useSelector } from 'react-redux'
export default function ProductDetail() {
    const product = useSelector((state) => state.product)
    const { productId } = useParams()
    const dispatch = useDispatch()
    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
            console.log("Err", err)
        })
        dispatch(selectedProduct(response.data))
    }
    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail()
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId])
    return (
        <div>
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <div className="two-section">
                    <div className="single-pro-image">
                        <i className="fa-solid fa-arrow-left" id="backward"></i>
                        <img src={product.image} width="100%" id="MainImg" alt="" />

                    </div>
                    <div className="single-pro-details">
                        <h6>{product.category}</h6>
                        <h2>{product.price}</h2>
                        <select>
                            <option>Select size</option>
                            <option>XL</option>
                            <option>XXL</option>
                            <option>Small</option>
                            <option>Larg</option>
                        </select>
                        <input type="number" value="1" />
                        <button className="normal" onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
                        <h4>Product Details</h4>
                        <p>{product.description}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
