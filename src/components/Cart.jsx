import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import trash from "./img/trash3.svg"
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore"

const Cart = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const {cart, clear, removeItem, cartTotal, cartSum} = useContext(CartContext)

    const generarOrden = () => {
        const buyer = {name:nombre, email:email, phone:telefono}
        const fecha = new Date();
        const date = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
        const order = {buyer:buyer, items:{cart}, date:date, total:cartSum()};

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id);
        });
    }

    if (cartTotal() === 0){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="alert alert-warning text-center" role="alert">No se encontraron Productos en el Carrito!
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="container my-5">
            <div className="row">
            <h1 className="text-center">Productos Seleccionados</h1>
                <div className="col-md-3">
                <form>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" onInput={(e) => {setNombre(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" className="form-control" id="email" onInput={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">Telefono</label>
                        <input type="text" className="form-control" id="telefono" onInput={(e) => {setTelefono(e.target.value)}}/>
                    </div>
                    <button type="button" className="btn btn-secondary" onClick={generarOrden}>Generar Orden</button>
                </form>
                </div>
                <div className="col-md-9">
                    
                    <table className="table">
                        <tr>
                            <td colSpan={5}><Link type="button" className="btn btn-secondary bg-secondary" onClick={() => {clear()}}>Vaciar Carrito</Link></td>
                        </tr>
                        {
                            cart.map(item =>(
                                <tr key={item.index}>
                                    <td className="text-start" width={"10%"}><img src={item.img} alt={item.nombre} width={100}/></td>
                                    <td className="text-start align-middle" width={"40%"}>{item.nombre}</td>
                                    <td className="text-center align-middle" width={"20%"}>{item.quantity}</td>
                                    <td className="text-center align-middle" width={"20%"}>${item.precio * item.quantity}</td>
                                    <td className="text-end align-middle" width={"10%"}><button className="btn" onClick={() => 
                                    {removeItem(item.index)}}><img src={trash} alt={trash} width={30} /></button></td>
                                </tr>
                                ))
                        }
                        <tr>
                            <td colSpan={2}>&nbsp;</td>
                            <td className="text-center">Total a Pagar</td>
                            <td className="text-center"><b>${cartSum()}</b></td>
                            <td>&nbsp;</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="row my_3">
                <div className="col-md-12">
                        {orderId ? <div className="alert alert-success text-center" role="alert"><h3>Gracias por tu Compra!</h3>
                       <p className="text-center">Se genero una Orden de Compra con el ID: <b>{orderId}</b></p></div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Cart;