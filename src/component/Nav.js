import React from "react";
import './index.css'
function Nav(){
    return(
        <nav className='nav'>
    <a className='Netflix_hide' href='legal/notices'>MOBILE SHOPEE</a>
    <a className='Netflix' href='legal/notices'>MOBILE SHOPEE</a>
    <button className='button2'><a href='legal/notices'>SIGN IN</a></button>
    <button className='button2'><a href='legal/notices'><i class="fa-solid fa-cart-plus"></i> Cart</a></button>
    <button className='button3'><a href='legal/notices'>JOIN NOW</a></button>
    <p>CHOOSE YOUR FAVOURITES ONE</p>
  </nav>
    )
}
export default Nav;