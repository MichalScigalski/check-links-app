import jwt from 'jwt-decode'

const getCurrentUser = () => {
    const token = localStorage.getItem('token')
    if (token)
        return jwt(token)
    return null
}

const authService = {
    getCurrentUser
}

export default authService