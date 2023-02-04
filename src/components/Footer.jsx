import insta from "./img/icons8-instagram-64.png"
import tiktok from "./img/icons8-tik-tok-50.png"
import wpp from "./img/whatsapp.svg"

const Footer = () => {
    return (
        <footer>
        <div className="container-fluid" />
          <div className="row p-5 bg-secondary">
            <div className="col-xs-12 col-md-6 col-lg-4 d-flex flex-column align-items-center">
              <p className="h5">Navegacion</p>
              <div className="mb-2">
                <a className="text-white text-decoration-none" href="paginas/nosotros.html">NOSOTROS</a>
              </div>
              <div className="mb-2">
                <a className="text-white text-decoration-none" href="paginas/contacto.html ">CONTACTO</a>
              </div>
              <div className="mb-2">
                <a className="text-white text-decoration-none" href="paginas/cuidados.html">CUIDADOS</a>
              </div>
              <div className="mb-2">
                <a className="text-white text-decoration-none" href="index.html">INICIO</a>
              </div>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-4 d-flex flex-column align-items-center"> 
              <p className="h5">Redes Sociales</p>
              <div className="mb-2">
                <a href="https://www.instagram.com/meraki.ik/"><img src={insta} alt={"Instagram"} width={30}  /></a>
              </div>
              <div className="mb-2">
                <a href="https://www.tiktok.com/@merakiik"><img src={tiktok} alt={"Tiktok"} width={30} /></a>
              </div>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-4 d-flex flex-column align-items-center">
              <p className="h5">Linea Directa</p>
              <img src={wpp} alt={"whatsapp"} width={30} />
            <div>
            </div>
          </div>
        </div>
      </footer>
    )
}
    



export default Footer