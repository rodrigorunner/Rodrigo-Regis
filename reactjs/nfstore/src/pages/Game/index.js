import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import api from "../../services/api"

const Game = () => {
    const [game, setGame] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()
    
    useEffect(() => {

        api.get(`?apikey=b33695bf&i=${id}`)
          .then(res => {
              setGame(res.data)
          })
          .catch(() => {
              navigate('/', { replace: true })
          })
    }, [navigate, id])

    function salvar(id) {
        const gamesSalvos = localStorage.getItem('games')

        const meusGames = JSON.parse(gamesSalvos) || []

        const hasGames = meusGames.some(meusGame => meusGame.imdbID === id)
        if(hasGames) {
            toast.warning('Você já adicionou esse game.')
            return
        }
        meusGames.push(game)
        localStorage.setItem('games', JSON.stringify(meusGames))
        toast.success('Game adicionado com sucesso.')
    }

    return(
        <section className="container">
           <div className="row text-left mx-auto">
                <div className="col-sm-12 col-md-3">
                    <img src={`${game.Poster}`}  alt={`${game.Title}`}/>
                </div>
                <div className="col-sm-12 col-md-3 mt-2">
                    <ul className="list-group">
                        <li className="list-group-item"><strong>Sinopse:</strong> {game.Plot}</li>
                        <li className="list-group-item"><strong>Genero:</strong> {game.Genre}</li>
                        <li className="list-group-item"><strong>Atores:</strong> {game.Actors}</li>
                        <li className="list-group-item"><strong>Diretor:</strong> {game.Director}</li>
                    </ul>
                    <div className="card-body text-center mt-2 mb-2">
                        <button onClick={() => salvar(game.imdbID)} className="btn btn-dark me-2 text-white">Salvar</button>
                        <a target='blank' href={`https://www.youtube.com/results?search_query=${game.Title} trailer`} className="btn btn-danger card-link">Trailer</a>
                    </div>
                </div>
           </div>
        </section>
    )
}

export default Game