import { Route, Routes } from 'react-router'
import Home from './routes/Home/Home.component'
import Header from './components/Header/Header.component'
import Login from './routes/Login/Login.component'
import Register from './routes/Register/Register.component'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from './context/User.context'
import authService from './services/auth.service'
import Profile from './routes/Profile/Profile.component'
import Dashboard from './routes/Dashboard/Dashboard.component'
import { ThemeProvider } from 'styled-components'
import GlobalStyle, { darkMode, lightMode } from './globalStyles'
import { AlertContext } from './context/Alert.context'
import Alert from './components/Alert/Alert.component'

const App = () => {
    const { setUser } = useContext(UserContext)
    const { alertData } = useContext(AlertContext)
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    useEffect(() => {
        const useSession = authService.getCurrentUser()
        if (useSession) setUser(useSession)
    }, [])

    return (
        <ThemeProvider theme={isDarkTheme ? darkMode : lightMode}>
            {alertData && <Alert />}
            <GlobalStyle />
            <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
            <Routes>
                <Route exact index path="/" element={<Home />} />
                <Route path="/:username" element={<Profile />} />
                {authService.getCurrentUser() ? (
                    <Route path="/dashboard" element={<Dashboard />} />
                ) : (
                    <>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </>
                )}
            </Routes>
        </ThemeProvider>
    )
}

export default App
