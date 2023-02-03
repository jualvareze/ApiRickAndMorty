
const Header = (props) => {
    const {filtrar} = props
    return(
        <>
        <div className="bg-dark text-light d-flex justify-content-around py-3">
        <h1 className="">Rick and Morty</h1>
        <div>
        <input className="" type="text" name="" id=""  onChange={(input) => filtrar(input.target.value)}/>
        </div>
        </div>
        </>
    )
}

export default Header