import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './style.css'

const Header = () => {
    const reserveSize = useSelector(state => state.reserve.length)
    return(
        <header>
            <Link className='logo' to='/'>TripHappy</Link>
        
            <Link className='reserva' to='/reservas'>
                Minhas Reservas
                <span>{reserveSize} {reserveSize > 1 ? 'reservas' : 'reserva'} </span>
            </Link>
            
        </header>
    )
}

export default Header 