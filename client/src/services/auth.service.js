import jwt from 'jwt-decode'

const getCurrentUser = () => {
    const token = localStorage.getItem('token')
    return jwt(token)
}

const authService = {
    getCurrentUser
}

export default authService