import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center m-4">
      <h1>Página não Encontrada</h1>
      <h2>Error 404</h2>
      <Link to='/'>Página Principal</Link>
    </div>
  );
}

export default Error;