import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import { FaPlusCircle } from 'react-icons/fa'
import { toast } from "react-toastify";
import api from "../../service/api";
import './style.css'

const Home = () => {
  const [list, setList] = useState([])
  const navigate = useNavigate()

  useEffect(() => {

    const loadApi = async () => {
     
       await api.get('api/v1')
       .then(res => res.data)
       .then(data => setList(data))
       .catch(err => console.log(err))
    }
    loadApi()

  }, [])

  const deletar = async (id) => {
    try {
      // Envia a requisição para o servidor.
      await api.delete(`api/v1/${id}`)
      // Encontrar o id para realizar uma filtragem.
      const findId = list.filter(list => list._id !== id)
      // Setar o valor retornado no estado.
      setList(findId)
      // Manter o usuário em Home Page.
      navigate('/', {replace: true})
      // Enviar um alerta de sucesso.
      toast.success('Atleta deletado.')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <p className="text-center m-4">Nunca subestime o poder que um <span className="red">bom treino</span> pode ter em sua mente, manter o sonho <span className="text red">vivo</span> é a metade da batalha.</p>

      <Link to='/cadastrar' className="btn btn-dark btn-lg m-3">Cadastrar <FaPlusCircle className='circle'/></Link>
      <div className="table-responsive-md">
        <table className="table table-striped table-hover text-center">
          <thead className="table-danger">
            <tr>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>E-mail</th>
              <th>Idade</th>
              <th>#</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>   
               
              {list.map(item => {
                return(
                  <tr key={item._id}>
                    <td>
                      <p>{item.nome[0].toUpperCase() + item.nome.substring(1)}</p>
                    </td>
                    <td>
                      <p>{item.sobrenome[0].toUpperCase() + item.sobrenome.substring(1)}</p>
                    </td>
                    <td>
                      <p>{item.email}</p>
                    </td>
                    <td>
                      <p>{item.idade}</p>
                    </td>
                    <td>
                      <Link to={`/editar/${item._id}`}>
                        <button className="btn btn-secondary">Editar</button>
                      </Link>
                    </td>
                    <td>
                      <button onClick={() => deletar(`${item._id}`)} className="btn btn-danger">Excluir</button>
                    </td>
                </tr>
                )
              }).reverse()}
          </tbody>
        </table>
      </div>
        {list.length === 0 && <h3 className='text-center m-3'>Nenhum <span className="red">Atleta</span> registrado</h3>}  
    </div>
  );
}

export default Home;