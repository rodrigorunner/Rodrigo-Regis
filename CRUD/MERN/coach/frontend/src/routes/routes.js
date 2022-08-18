import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cadastrar from '../pages/Cadastrar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Error from '../pages/Error'
import Home from '../pages/Home'
import Editar from '../Editar'

const RoutesPath = () => {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='cadastrar' element={<Cadastrar/>} />
                <Route path='editar/:id' element={<Editar/>} />
                <Route path='*' element={<Error/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RoutesPath