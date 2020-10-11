import React from 'react';
import Routes from './routes';
import GlobalStyle from './assets/styles/GlobalStyles';
import { Provider } from 'react-redux';
import { store } from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ToastContainer />
      <Routes />
    </Provider>
  );
}

export default App;
