import jwt from 'jwt-decode'
import userService from './user.service'

const getAuthToken = () => {
    const token = localStorage.getItem('token')
    if (token) return token
    return null
}

const isTokenValid = (token) => {
    const decoded = jwt(token)
    if(decoded.exp < Date.now() / 1000) 
        return false
    return true
}

const getCurrentUser = () => {
    const token = getAuthToken()
    if (token) {
        if(isTokenValid(token)) 
            return jwt(token)
        else {
            userService.logout()
            throw new Error('Session expired, login again!')
        }
    }
    return null
}

const authService = {
    getAuthToken,
    getCurrentUser,
    isTokenValid
}

export default authService
