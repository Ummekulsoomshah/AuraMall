import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../redux/actions/productActions'
export default function ProductComponent() {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.allProducts.products)
    const renderList = products.map((product) => {
        return (
            <Link to={`/product/${product.id}`}>
            <div className="item-container">
                <img className="item-image" src={product.image} alt="item image" />
                <div className="rating">
                    {product.rating.rate} ⭐ | {product.rating.count}
                </div>
                <div className="company-name">{product.category}</div>
                <div className="item-name">{product.description}</div>
                <div className="price">
                    <span className="current-price">Rs {product.price}</span>
                </div>
                <button className="btn-add-bag" onClick={() => dispatch(addToCart(product))}>Add to Bag</button>
            </div>
            </Link>
        )
    })
    return (
        <div className='grid'>
            {renderList}
        </div>
    )
}
