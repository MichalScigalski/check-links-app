import jwt from 'jwt-decode'

const getAuthToken = () => {
    const token = localStorage.getItem('token')
    if (token) return token
    return null
}

const getCurrentUser = () => {
    const token = getAuthToken()
    if (token) return jwt(token)
    return null
}

const authService = {
    getAuthToken,
    getCurrentUser,
}

export default authService
