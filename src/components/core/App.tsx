import { store } from '../../app/general/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Router from './Router';

function App() {
  return (
    <Provider store={store}>
      <Router />
      <ToastContainer autoClose={5000} />
    </Provider>
  );
}

export default App;
