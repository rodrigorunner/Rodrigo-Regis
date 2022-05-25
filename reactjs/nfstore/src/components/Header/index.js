import { Link } from "react-router-dom"
import './header.css'

const Header = () => {
    return(
        <header>
            <Link className="logo" to='/'>NFStore</Link>
            <Link className="btn btn-danger text-white" to='/favoritos'>Favoritos</Link>
        </header>
    )
}

export default Header