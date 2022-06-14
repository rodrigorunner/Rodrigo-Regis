import RoutePath from './router';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store'
import Header from './components/Header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <RoutePath />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
