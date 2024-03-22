import React from 'react'
import { IoPerson } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

export default function Header() {
  return (
    <>
     <header>
        <div class="logo_container">
            <a href="#"><img class="myntra_home" src="/AuraM.png" alt="AuraMall"/></a>
        </div>
        <nav class="nav_bar">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Studio <sup>New</sup></a>
        </nav>
        <div class="search_bar">
            <span class="material-symbols-outlined search_icon">search</span>
            <input class="search_input" placeholder="Search for products, brands and more"/>
        </div>
        <div class="action_bar">
            <div class="action_container">
            <IoPerson />
                <span class="action_name">Profile</span>
            </div>

            <div class="action_container">
            <CiHeart />
                <span class="action_name">Wishlist</span>
            </div>

            <a class="action_container" href="pages/bag.html">
                <IoBagOutline />
                <span class="action_name">Bag</span>
                <span class="bag-item-count">0</span>
            </a>
        </div>
    </header>
    </>
  )
}
