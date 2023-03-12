import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import ItemCount from "./ItemCount"


const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);
    const onAdd = (quantity) => [
        addItem(item, quantity)
    ]
    return(
        <div className="container d-flex">
            <div className="row">
                <div className="col">
                    <img src={item.img} alt={item.nombre} />
                </div>
                <div className="col">
                    <h1>{item.nombre}</h1>
                    <h5>${item.precio}</h5>
                    <p>{item.desc}</p>
                </div>
                    <ItemCount stock={item.stock} onAdd={onAdd}/>  
            </div>
        </div>
    )
}

export default ItemDetail