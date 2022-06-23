import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-danger text-center py-2">
        <Link to='/' className='btn btn-outline-white text-white fs-1'>ClimaTech</Link>
    </header>
  );
}

export default Header;
