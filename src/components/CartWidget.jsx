import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./context/CartContext";
import cart from "./img/icons8-shopping-trolley-64.png"

const Carrito = () => {
    const {cartTotal} = useContext(CartContext);

    return cartTotal() > 0 ?
        <Link to={"/cart"} className="btn btn-secondary position-relative">
            <img src={cart} alt={"Carrito"} width={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}
            </span>
        </Link> : "";
}

export default Carrito