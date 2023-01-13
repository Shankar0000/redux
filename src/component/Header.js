import React from "react";

const Header = (props) => {

    console.log('Home',props.data)
    console.log(props.data.length)

    return(
        <>
                <button className="add"><i className="fa-sharp fa-solid fa-cart-plus"></i> Cart</button>
                <span className="count">{props.data.length}</span>
        </>
    )
}

export default Header;