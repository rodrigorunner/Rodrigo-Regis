import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../service/api';

const Editar = () => {

  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')
  const [idade, setIdade] = useState('')
  const [nome, setNome] = useState('')
  const navigate = useNavigate()
  const {id} = useParams()


  useEffect(() => {
    const loadApi = async () => {
     
      await api.get(`api/v1/${id}`)
      .then(res => res.data)
      .then(data => {
        setNome(data.nome)
        setSobrenome(data.sobrenome)
        setEmail(data.email)
        setIdade(data.idade)
      })
      .catch(err => console.log(err))
   }
   loadApi()
  }, [id])

  const updated = async () => {
    const data = {
      nome,
      sobrenome,
      email,
      idade
    }
    const res = await api.put(`api/v1/${id}`, data)
    if(res) {
      setNome('')
      setSobrenome('')
      setEmail('')
      setIdade('')
      navigate('/', {replace: true})
      toast.success('Atualizado com sucesso.')
    }
  }


  return (
    <div className="m-4">
      <h3>Editar</h3>
      <form onSubmit={e => e.preventDefault()}>
        <div className='form-group'>
          <label>Nome</label>
          <input 
          type='text' 
          className='form-control' 
          value={nome} 
          onChange={e => setNome(e.target.value)} />
        </div>

        <div className='form-group'>
          <label>Sobrenome</label>
          <input 
          type='text' 
          className='form-control' 
          value={sobrenome} 
          onChange={e => setSobrenome(e.target.value)} />
        </div>

        <div className='form-group'>
          <label>E-mail</label>
          <input 
          type='text' 
          className='form-control' 
          value={email} 
          onChange={e => setEmail(e.target.value)} />
        </div>
        <div className='form-group'>
          <label>Idade</label>
          <input 
          type='number' 
          className='form-control' 
          value={idade} 
          onChange={e => setIdade(e.target.value)} />
        </div>

        <button onClick={updated} className='btn btn-danger mt-2' type='submit'>Editar</button>
      </form>
    </div>
  );
}

export default Editar;