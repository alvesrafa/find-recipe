import React from 'react';
import Routes from './routes';
import GlobalStyle from './assets/styles/GlobalStyles';
import { Provider } from 'react-redux';
import { store } from './store';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <GlobalStyle />
      <Routes />
    </Provider>
  );
}

export default App;
