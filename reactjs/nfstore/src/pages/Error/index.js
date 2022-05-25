import { Link } from "react-router-dom"

const Error = () => {
    return(
        <div>
            <h3>404</h3>
            <h5>Página não existe</h5>
            <Link to='/'>Página inicial</Link>
        </div>
    )
}

export default Error