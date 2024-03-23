import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/actions/productActions'

export default function BagContainer() {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.allProducts.cart)

    return (
        <div className="bag-items-container">
            {cart.map((item) => (
                <div className="bag-item-container" key={item.id}>
                    <div className="item-left-part">
                        <img className="bag-item-img" src={item.image} alt={item.title} />
                    </div>
                    <div className="item-right-part">
                        <div className="company">{item.title}</div>
                        <div className="item-name">{item.description}</div>
                        <div className="price-container">
                            <span className="current-price">Rs {item.price}</span>
                        </div>
                    </div>
                    <div className="remove-from-cart" onClick={() => dispatch(removeFromCart(item))}>X</div>
                </div>
            ))}
        </div>
    )
}