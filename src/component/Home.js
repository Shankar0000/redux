import React from "react";

const Home = (props) => {

    console.log('props',props)

    return(
        <>
            <div className="div1">
                <button className="add"><i className="fa-sharp fa-solid fa-cart-plus"></i> Cart</button>
                <img src="https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/r/o/o/-original-imaghkvuzxkcna4n.jpeg?q=70" alt="Mobile Image" />
                <h2>₹24,999</h2>
                <h4>REDMI Note 12 Pro 5G (Stardust Purple, 128 GB)  (6 GB RAM)</h4>
                <button>Add To Cart</button>
            </div>
        </>
    )
}

export default Home;