import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './globalStyles';
import { UserContextProvider } from './context/User.context';
import { ProfileContextProvider } from './context/Profile.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <UserContextProvider>
        <ProfileContextProvider>
          <App />
        </ProfileContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

