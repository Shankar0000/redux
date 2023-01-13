import Header from "../component/Header";
import { connect, Connect } from "react-redux";

const mapStateToProps=state => ({
    data:state.cartItems
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);