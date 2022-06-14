import { addReserveSaga } from "../../store/modules/reservas/actions"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { FaPlus } from 'react-icons/fa'
import api from "../../services/api"
import './style.css'

const Home = () => {
    const dispatch = useDispatch()
    const [trip, setTrip] = useState([])

    useEffect(() => {

        async function loadApi() {
            const res = await api.get('/trips')
            setTrip(res.data)
        }   
        loadApi()

    }, [])

    function handleClick(id) {
        dispatch(addReserveSaga(id))
    }

    return(
        <section>
            <div className="card">
                <div className="card-body">
                    {trip.map(trip => {
                        return(
                            <div className="card-content" key={trip.id}>
                                <img src={trip.image} alt={trip.title} />
                                <h3>{trip.title}</h3>
                                <p>{trip.status ? 'Disponivel' : 'Indisponivel'}</p>

                                <button onClick={() => handleClick(trip.id)}>Solititar Reserva <span><FaPlus /></span></button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Home 