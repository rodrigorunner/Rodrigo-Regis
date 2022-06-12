import { Link } from 'react-router-dom'
import './style.css'

const Header = () => {
    return(
        <header>
            <h1>TripHappy</h1>
            <Link to='/'>Minhas Reservas</Link>
        </header>
    )
}

export default Header 