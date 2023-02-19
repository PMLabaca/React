import { Link } from "react-router-dom"

const Item = ({item}) => {
    return(
        <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
            <div className="card my-2">
                <img src={item.img} className="card-img-top" alt={item.nombre} />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.nombre}</h5>
                </div>
            </div>
        </Link>
    )
}

export default Item