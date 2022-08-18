import { FaRunning } from 'react-icons/fa'
import { Link } from "react-router-dom";
import './style.css'

const Footer = () => {
  return (
    <footer className="bg-danger text-center p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
              <Link to='/' className="text-white footer">Coach<FaRunning />Runner</Link>
          </div>
          <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to='cadastrar'>Cadastrar</Link>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;