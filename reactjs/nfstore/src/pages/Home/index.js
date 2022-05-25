import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../services/api'
import './home.css'

const Home = () => {
    const [game, setGame] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

       api.get('?apikey=b33695bf&s=need+for+speed')
        .then(res => {
            setGame(res.data.Search)
        })
        .catch(() => {
            navigate('/', { replace: true })
        })

    }, [navigate])

    return(
        <section className='container'>
            <div className='row'>                    
            {game.map(item => {
                return(
                        <div className='col-sm-12 col-md-3 text-center mb-2' key={item.imdbID}>
                            <div className="card">
                            <img src={`${item.Poster}`} className="card-img-top" alt={`${item.Title}`} />
                            <div className="card-body">
                                <h5 className="card-title">{item.Title}</h5>
                                <Link className='btn btn-danger' to={`/game/${item.imdbID}`}>Detalhes</Link>
                            </div>
                            </div>
                        </div>
                )
            })}
            </div>
        </section>
    )
}

export default Home