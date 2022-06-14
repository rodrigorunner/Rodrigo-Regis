import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Reservas from './pages/Reservas'

const RoutePath = () => {
    return(
        <Routes>
            <Route path='' element={<Home/>} />
            <Route path='reservas' element={<Reservas/>} />
        </Routes>
    )
}

export default RoutePath