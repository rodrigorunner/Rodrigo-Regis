import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import api from '../../services/api'
import './style.css'

const Home = () => {

  const [data, setData] = useState([])
  const [nome, setNome] = useState([])
  const [comentario, setComentario] = useState([])
  const navigate = useNavigate()

  useEffect(() => {

    const loadApi = async () => {

      const res = await api.get('/api/posts')
      setData(res.data)
    }
    loadApi()

  }, [])

  const deletarPost = async (id) => {
      await api.delete(`api/posts/${id}`)
      const findId = data.filter(data => data._id !== id)
      setData(findId)
      navigate('/', {replace: true})
      toast.success('Deletado com sucesso.')
  }

  return (
    <main>
      <section className='m-4'>
        <div className='text-center text-white p-5 linear'>
          <p className='display-6'>Olá, Little Dev</p>
          <p>Elevando o seu aprendizado além da Cloud.</p>
        </div>

        <div className='mx-auto mb-2'>
          <img className='d-block mx-auto' src={require('../../assets/img/code.jpg')} alt='Computador com codigo na tela' />
        </div>

        <div className='container'>
          <form>
            <div className='form-group'>
              <label>Nome</label>
              <input type='text' className='form-control' value={nome} onChange={e => setNome(e.target.value)} />
            </div>
            <div className='form-group'>
              <label>Comentario</label>
              <textarea class="form-control" value={comentario} onChange={e => setComentario(e.target.value)} placeholder="Deixe seu comentário"></textarea>
            </div>
            <button className='btn btn-dark mt-2'>Cadastrar</button>
          </form>
        </div>
        <div className='mt-2'>
          <ul className='list-group'>
              {data.map(data => {
                return(
                  <li className='list-group-item' key={data._id}>
                      <strong>{data.nome}</strong>
                      <p>{data.comentario}</p>
                      <div>
                        <Link to={`/editar/${data._id}`}>
                          <button className='btn btn-secondary'>Editar</button>
                        </Link>
                        <button onClick={() => deletarPost(`${data._id}`)} className='btn btn-danger'>Deletar</button>
                      </div>
                  </li>
                )
              }).reverse()}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Home;
