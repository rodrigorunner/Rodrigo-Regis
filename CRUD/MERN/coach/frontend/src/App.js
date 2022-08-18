import RoutesPath from "./routes/routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <RoutesPath />
      <ToastContainer />
    </div>
  );
}

export default App;
