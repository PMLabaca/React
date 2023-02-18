import Carrito from "./CartWidget"
import { Link, NavLink } from "react-router-dom"
import logo from "./img/MerakiLogo.png"

const NavBar = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to={"/"}><img src={logo} alt="Merakiik" width={100} /></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeclassname={"active"} aria-current="page" to={"/"}>Inicio</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeclassname={"active"} to={"/Nosotros"}>Nosotros</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeclassname={"active"} to={"/Cuidados"}>Cuidados</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to={"/"} role="button" aria-expanded="false">Productos</NavLink>
                                    <ul className="dropdown-menu">
                                        <li><NavLink className="dropdown-item" to={"/category/bodys"}>Bodys</NavLink></li>
                                        <li><NavLink className="dropdown-item" to={"/category/bombis"}>Bombis</NavLink></li>
                                        <li><NavLink className="dropdown-item" to={"/category/conjunto"}>Conjuntos</NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <Carrito />
                </div>
            </div>
        </div>
    )
}

export default NavBar