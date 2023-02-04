import imgPrincipal from "./img/images.jpg"

const Destacado = () => {
    return (
        <div className="container-fluid my-3">
            <div className="row">
                <div className="col">
                    <img src={imgPrincipal} alt={"destacado"} width={"700"} height={"300"} className="rounded mx-auto d-block" />
                </div>
            </div>
        </div>
    )
}

export default Destacado