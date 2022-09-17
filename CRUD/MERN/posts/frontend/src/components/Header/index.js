import { Link } from 'react-router-dom'
import './style.css'

const Header = () => {
  return (
    <header>
        <div className='nav d-flex justify-content-evenly p-3 align-items-center bg-dark'>
            <Link to='/' className='text-white'>TechSearch</Link>
            <p className='m-0 d-flex'>
                <input type='text' className='form-control' placeholder='Busque um comentário' />
                <button className='btn btn-primary'>Pesquisar</button>
            </p>
        </div>
    </header>
  );
}

export default Header;
