import RoutePath from './router';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutePath />
    </BrowserRouter>
  );
}

export default App;
