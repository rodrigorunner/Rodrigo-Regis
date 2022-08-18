import { Link, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { toast } from 'react-toastify'
import api from '../../service/api'
import{ useState } from 'react'
import './style.css'

const Cadastrar = () => {
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')
  const [idade, setIdade] = useState()
  const navigate = useNavigate()

 const cadastrar = async (e) => {
   e.preventDefault()

   const data = {
    nome,
    sobrenome,
    email,
    idade
   }

   const res = await api.post(`api/v1`, data)
   if(res) {
    setNome('')
    setSobrenome('')
    setEmail('')
    setIdade('')
    navigate('/', {replace: true})
    toast.success('Atleta cadastrado com sucesso.')
   }
 }

  return (
    <div className="container">
      <Link to='/'>
        <FaArrowLeft className='arow me-1'/>
      </Link>
      <h3>Cadastrar</h3>
      <form className="m-4" onSubmit={e => cadastrar(e)}>

        <div className="form-group">
          <label>Nome</label>
          <input 
          className="form-control" 
          type="text" name="nome" 
          placeholder="Digite seu nome."
          value={nome}
          onChange={e => setNome(e.target.value)}/>
        </div>

        <div className="form-group">
          <label>Sobrenome</label>
          <input 
          className="form-control" 
          type="text" 
          name="sobrenome" 
          placeholder="Digite seu sobrenome."
          value={sobrenome}
          onChange={e => setSobrenome(e.target.value)}/>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input 
          className="form-control" 
          type="text" 
          name="email" 
          placeholder="Digite seu email."
          value={email}
          onChange={e => setEmail(e.target.value)}/>
        </div>

        <div className="form-group">
          <label>Idade</label>
          <input 
          className="form-control" 
          type="number" 
          name="idade" 
          placeholder="Digite seu idade."
          value={idade}
          onChange={e => setIdade(e.target.value)}/>
        </div>

        <button className="btn btn-danger mt-2" type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Cadastrar;