import React from 'react'
import { useSelector } from 'react-redux'
import BagSummaryPopup from './BagSummaryPopup'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setPlaceOrder } from '../redux/actions/productActions'
export default function Bagsummary() {
    const [buttonpopup, setbuttonpopup] = useState(false)

    const dispatch = useDispatch()
    const placeorder = useSelector((state) => state.allProducts.placeorder)
    const cart = useSelector((state) => state.allProducts.cart)
    const totalMRP = cart.reduce((acc, item) => acc + item.price, 0)
    return (
        <>
            {!placeorder?<div className="bag-summary">
                <button className="btn-place-order" onClick={() => setbuttonpopup(true)}>
                    <div className="css-xjhrni">CHECKOUT</div>
                </button>
            </div>:""}
            <BagSummaryPopup trigger={buttonpopup} settrigger={setbuttonpopup} >
                
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
                    <hr />
                    <div className="price-footer">
                        <span className="price-item-tag">Total Amount</span>
                        <span className="price-item-value">₹${totalMRP}</span>
                    </div>
                    <button className="btn-place-order"
                        onClick={() => {
                            dispatch(setPlaceOrder(true))
                            setTimeout(() => {
                                setbuttonpopup(false)
                            }, 2000)
                        }}
                        style={{ backgroundColor: placeorder ? 'green' : 'rgb(255, 63, 108)' }}>
                        <div className="css-xjhrni" >PLACE ORDER</div>
                    </button>
                </div>
            </BagSummaryPopup>
        </>
    )
}
