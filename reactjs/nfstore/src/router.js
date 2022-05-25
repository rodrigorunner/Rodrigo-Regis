import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home'
import Game from './pages/Game'
import Favorito from './pages/Favorito'
import Error from './pages/Error'

const RoutesPath = () => {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="game/:id" element={<Game />} />
                <Route path="favoritos" element={<Favorito />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesPath