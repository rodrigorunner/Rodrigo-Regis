import RoutesPath from "./routes/routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <RoutesPath />
      <ToastContainer/>
    </>
  );
}

export default App;
