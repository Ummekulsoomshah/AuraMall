import React from 'react'
import { useSelector } from 'react-redux'
export default function Bagsummary() {
   
    const cart = useSelector((state) => state.allProducts.cart)
    const totalMRP = cart.reduce((acc, item) => acc + item.price, 0)
    return (
        <div className="bag-summary">
            <div className="bag-details-container">
                <div className="price-header">PRICE DETAILS (${cart.length} Items) </div>
                <div className="price-item">
                    <span className="price-item-tag">Total MRP</span>
                    <span className="price-item-value">₹${totalMRP}</span>
                </div>
                
                <div className="price-item">
                    <span className="price-item-tag">Convenience Fee</span>
                    <span className="price-item-value">₹99</span>
                </div>
                <hr/>
                    <div className="price-footer">
                        <span className="price-item-tag">Total Amount</span>
                        <span className="price-item-value">₹${totalMRP}</span>
                    </div>
            </div>
            <button className="btn-place-order">
                <div className="css-xjhrni">PLACE ORDER</div>
            </button>
        </div>
    )
}
