import { useParams } from "react-router-dom";

const Editar = () => {
  const { id } = useParams()

  return (
    <div>
      <h1>Editar: {id}</h1>
    </div>
  );
}

export default Editar;
