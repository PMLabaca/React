import cart from "./img/icons8-shopping-trolley-64.png"

const Carrito = () => {
    return (
        <button type="button" className="btn btn-secondary position-relative">
            <img src={cart} alt={"Carrito"} width={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1
            </span>
        </button>
    )
}

export default Carrito