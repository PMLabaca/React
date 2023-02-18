import ItemCount from "./ItemCount"


const ItemDetail = ({item}) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={item.img} alt={item.nombre} />
                </div>
                <div className="col">
                    <h1>{item.nombre}</h1>
                    <h5>${item.precio}</h5>
                    <p>{item.desc}</p>
                </div>
                    <ItemCount stock={item.stock}/>  
            </div>
        </div>
    )
}

export default ItemDetail