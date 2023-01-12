import React from "react";
import './index.css'
function Nav(){
    return(
        <nav className='nav'>
    <a className='Netflix_hide' href='https://www.netflix.com/'>MOBILE SHOPEE</a>
    <a className='Netflix' href='https://www.netflix.com/'>MOBILE SHOPEE</a>
    <button className='button2'><a href='https://www.netflix.com/login?nextpage=%2Fbrowse%2Fgenre%2F1191605%3Flocale%3Den-IN'>SIGN IN</a></button>
    <button className='button2'><a href='https://www.netflix.com/login?nextpage=%2Fbrowse%2Fgenre%2F1191605%3Flocale%3Den-IN'><i class="fa-solid fa-cart-plus"></i> Cart</a></button>
    <button className='button3'><a href='https://www.netflix.com/login?nextpage=%2Fbrowse%2Fgenre%2F1191605%3Flocale%3Den-IN'>JOIN NOW</a></button>
    <p>CHOOSE YOUR FAVOURITES ONE</p>
  </nav>
    )
}
export default Nav;