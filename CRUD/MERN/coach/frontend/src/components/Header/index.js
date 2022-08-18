import { FaRunning } from 'react-icons/fa'
import { Link } from "react-router-dom"
import './style.css'

const Header = () => {
  return (
    <header className="text-center">      
        <nav className="bg-danger p-4">
          <Link to='/' className="display-6 text-white header">Coach<FaRunning />Runner</Link>
        </nav>
    </header>
  )
}

export default Header;
