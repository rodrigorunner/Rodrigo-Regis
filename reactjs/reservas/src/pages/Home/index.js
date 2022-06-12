import { useState, useEffect } from "react"
import api from "../../services/api"

const Home = () => {
    const [trip, setTrip] = useState([])

    useEffect(() => {

        async function loadApi() {
            const res = await api.get('/trips')
            setTrip(res.data)
            console.log(res.data)
        }   
        loadApi()

    }, [])

    return(
        <section>
            <div className="card">
                <div className="card-body">
                    {trip.map(trip => {
                        return(
                            <div className="card-content" key={trip.id}>
                                <img src={trip.image} />
                                <h3>{trip.title}</h3>
                                <p>{trip.status ? 'Disponivel' : 'Indisponivel'}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Home 