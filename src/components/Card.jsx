
const Card = (props) => {
    const { imagen, nombre, especie, genero, origen } = props
    let gentrad = "";
    switch (genero) {
        case "Male":
            gentrad = "masculino"
            break;
        case "Female":
            gentrad = "femenino"
            break;
        default:
            gentrad = "indefinido";
    }
    return (
        < div className="card" style={{ width: '18rem' }}>
            <img src={imagen} className="card-img-top" alt="..." />
            <div className="card-body">
                <div className="card-text">
                    <h3>{nombre}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">especie: {especie}</li>
                        <li className="list-group-item">genero: {gentrad}</li>
                        <li className="list-group-item">origen: {origen}</li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Card