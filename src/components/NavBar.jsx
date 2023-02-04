import Carrito from "./CartWidget"
import logo from "./img/MerakiLogo.png"

const NavBar = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href={"/"}><img src={logo} alt="Merakiik" width={100} />Meraki</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href={"/Inicio"}>Inicio</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href={"/Nosotros"}>Nosotros</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href={"/Cuidados"}>Cuidados</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href={"/Productos"}>Productos</a>
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