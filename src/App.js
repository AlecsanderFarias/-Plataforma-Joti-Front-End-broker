import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { ThemeProvider, useTheme } from '@material-ui/core/styles';

import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';

import bucket from './store/index';

function App() {
  const themeMaterial = useTheme();

  const theme = {
    ...themeMaterial,
    fontSFamily: 'Source Sans Pro, sans-serif !important',
  };

  return (
    <Provider store={bucket.store}>
      <PersistGate persistor={bucket.persistor}>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={3000} />
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
