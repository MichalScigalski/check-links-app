import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

const login = async (username, password) => {
    return axios
        .post(API_URL + '/user/login', {
            username,
            password,
        })
        .then((res) => {
            if (res.data.token) sessionStorage.setItem('token', res.data.token)
            return res.data
        })
}

const register = async (username, password) => {
    return axios.post(API_URL + '/user/register', {
        username,
        password,
    })
}

const logout = () => {
    sessionStorage.removeItem('token')
    document.location.reload()
}

const userService = {
    login,
    register,
    logout,
}

export default userService
