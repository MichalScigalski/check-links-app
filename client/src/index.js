import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './context/User.context'
import Modal from 'react-modal'
import { AlertContextProvider } from './context/Alert.context'

Modal.setAppElement('#root')
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AlertContextProvider>
                <UserContextProvider>
                    <App />
                </UserContextProvider>
            </AlertContextProvider>
        </BrowserRouter>
    </React.StrictMode>
)
