import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);
    

    const incrementarStock = () => {
        if(items < itemStock){
            setItems(items + 1)
        }
    }
    const decrecrementarStock = () => {
        if (items > 1){
            setItems(items - 1)
        }
    }

    const addToCart = () => {
        if (itemStock >= items){
           setItemStock(itemStock - items)
           setItems(1) 
           console.log("Agregaste: " + items + " Productos al Carrito!")
           setItemAdded(true);
           onAdd(items);
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);

    return(
        <div className="container mt-1">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn border-secondary border-end-0" onClick={decrecrementarStock}>-</button>
                        <button type="button" className="btn border-secondary border-start-0 border-end-0">{items}</button>
                        <button type="button" className="btn border-secondary border-start-0" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col">
                    {itemAdded ? <Link to={"/cart"} className="btn border-secondary border-2">Terminar mi Compra</Link> : 
                    <button className="btn border-secondary border-2" onClick={addToCart}>Agregar al Carrito</button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount