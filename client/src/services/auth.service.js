import jwt from 'jwt-decode'

const getCurrentUser = () => {
    const token = localStorage.getItem('token')
    if (token)
        return jwt(token)
    return null
}

const getAuthToken = () => {
    const token = localStorage.getItem('token')
    if (token)
        return token
    return null    
}

const authService = {
    getCurrentUser,
    getAuthToken
}

export default authService