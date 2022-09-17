import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="mt-4 text-center">
      <h1>Página não encontrada</h1>
      <h3>Error 404</h3>
      <Link to='/'>Página Principal</Link>
    </div>
  );
}

export default Error;
