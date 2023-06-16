import axios from 'axios'

const login = async (username, password) => {
    return axios.post(process.env.REACT_APP_API_URL + '/user/login', {
        username,
        password,
    }).then(res => {
        if(res.data.token)
            sessionStorage.setItem('token', res.data.token)
        return res.data
    })
}

const register = async (username, password) => {
    return axios.post(process.env.REACT_APP_API_URL + '/user/register', {
        username,
        password
    })
}

const userService = {
    login,
    register
}

export default userService
