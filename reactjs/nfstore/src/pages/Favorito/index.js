import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

const Favorito = () => {
    const [game, setGame] = useState([])

    useEffect(() => {

        const gameLista = localStorage.getItem('games')
        setGame(JSON.parse(gameLista))

    }, [])

    function excluir(id) {
        const filtrarGame = game.filter(item => {
            return(item.imdbID !== id)
        })
        setGame(filtrarGame)
        localStorage.setItem('games', JSON.stringify(filtrarGame))
        toast.success('Game removido com sucesso.')
    }

    return(
        <section>
            <h3>Meus Favoritos</h3>
            {game.length === 0 && <h4 className="text-center">Nenhum jogo salvo.</h4>}
            <ul className="list-group text-center">
                {game.map(item => {
                    return(
                        <li className="list-group-item" key={item.imdbID}>
                            <span>{item.Title}</span>   
                            <div>
                                <Link to={`/game/${item.imdbID}`} className="btn btn-dark me-2">Detalhes</Link>
                                <button onClick={() => excluir(`${item.imdbID}`)} className="btn btn-danger">Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Favorito