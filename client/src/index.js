import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './globalStyles';
import { UserContextProvider } from './context/User.context';
import Modal from 'react-modal'

Modal.setAppElement('#root');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <UserContextProvider>
          <App />
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

