import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export default function ProductComponent() {
    const searchTerm = useSelector((state) => state.allProducts.searchTerm);
    const products = useSelector((state) => state.allProducts.products)
    console.log(products)

    const renderList = products.filter((product)=>{
        return searchTerm
        ? product.category.toLowerCase().includes(searchTerm) 
        : product;
    }).map((product) => {
        return (
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none'}}>
                <div className="items-container">
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
                    </div>
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
