import { useState, useEffect } from 'react'
import api from '../../services/api'
import './style.css'

function Home() {
  const [weather, setWeather] = useState([])
  const [details, setDetails] = useState([])
  const [main, setMain] = useState([])
  const [input, setInput] = useState([])

  const apiKey = ''

  useEffect(() => {

    async function loadApi() {
        const res = await api.get(`weather?q=vila+velha&appid=${apiKey}&lang=pt_BR&units=metric`)
        setWeather(res.data)
        setDetails(res.data.weather)
        setMain(res.data.main)
        
      }
      loadApi()

    }, [])
    
    async function handleSearch() {
      const res = await api.get(`weather?q=${input}&appid=${apiKey}&lang=pt_BR&units=metric`)
        setWeather(res.data)
        setDetails(res.data.weather)
        setMain(res.data.main)
        setInput('')
  }


  return (
    <section className='container text-center mt-2 bg-primary text-white py-3'>
        <h1>{weather.name}</h1>
        <ul className='list-group'>
          <li className='list-group-item'>{Number(main.temp).toFixed(0)} ºC
              {details.map(item => {
                  return(
                      <div key={item.id}>
                          <img src={`http://openweathermap.org/img/wn/${item.icon}.png`} alt={item.name} />
                          <p>{item.main}</p>
                      </div>
                  )
              })}     
          </li>
          <li className='list-group-item'>Sensação Térmica: {Number(main.feels_like).toFixed(0)} ºC</li>
          <li className='list-group-item'>Mínima: {Number(main.temp_min).toFixed(0)} ºC</li>
          <li className='list-group-item'>Máxima: {Number(main.temp_max).toFixed(0)} ºC</li>
        </ul>
       
        <button type="button" className="btn btn-danger mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Pesquisar
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Pesquisar Clima</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <input value={input} onChange={e => setInput(e.target.value)} className='form-control' type='text' placeholder='Digite um local...' />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                <button onClick={handleSearch} type="button" className="btn btn-primary">Pesquisar</button>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Home;
