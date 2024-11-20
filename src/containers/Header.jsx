import React from 'react'
import { IoPerson } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { setSearchTerm } from '../redux/actions/productActions';
import {useDispatch} from "react-redux"

export default function Header() {
    const cart = useSelector((state) => state.allProducts.cart)
    const placeorder=useSelector((state)=>state.allProducts.placeorder)
    const dispatch = useDispatch();
    const handleSearch = (event) => {
        dispatch(setSearchTerm(event.target.value));
    };
    return (
        <>
            <header className='nav'>
                <div className="logo_container">
                    <a href="#"><img className="myntra_home" src="/Black and Green Flat Illustrated Organic Cosmetics Logo.png" alt="AuraMall" /></a>
                </div>
                <nav className="nav_bar">
                    <a href="#">Men</a>
                    <a href="#">Women</a>
                    <a href="#">Kids</a>
                    <a href="#">Home & Living</a>
                </nav>
                <div className="search_bar">
                    <span className="material-symbols-outlined search_icon">search</span>
                    <input className="search_input" placeholder="Search and filter by catagory" onChange={handleSearch} />
                </div>
                <div className="action_bar">
                    <div className="action_container">
                        <IoPerson />
                        <span className="action_name">Profile</span>
                    </div>

                    <div className="action_container">
                        <CiHeart />
                        <span className="action_name">Wishlist</span>
                    </div>
                    <Link to="/Bag" style={{ textDecoration: 'none'}}>
                        <div className="action_container">
                            <IoBagOutline />
                            <span className="action_name">Bag</span>
                            <span className="bag-item-count">{!placeorder?cart.length: 0}</span>
                        </div>
                    </Link>
                </div>
            

            </header>
        </>
    )
}
