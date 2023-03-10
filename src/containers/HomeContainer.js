import Home from "../component/Home";
import { connect, Connect } from "react-redux";
import addToCart from "../services/Actions/actions";

const mapStateToProps=state => ({
    data:state.cartItems
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler:data => dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);