import axios from 'axios'
import authService from './auth.service'

const API_URL = process.env.REACT_APP_API_URL

const login = async (username, password) => {
    return axios
        .post(API_URL + '/user/login', {
            username,
            password,
        })
        .then((res) => {
            if (res.data.token) localStorage.setItem('token', res.data.token)
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
    localStorage.removeItem('token')
}

const changePassword = async (newPassword) => {
    await axios.put(
        API_URL + '/user/change-password',
        { newPassword },
        {
            headers: {
                Authorization: 'Bearer ' + authService.getAuthToken(),
            },
        }
    )
}

const getIsProfile = async () => {
    const res = await axios.get(API_URL + `/user/get-isProfile`, {
        headers: {
            Authorization: 'Bearer ' + authService.getAuthToken(),
        },
    })
    return res.data
}

const userService = {
    login,
    register,
    logout,
    changePassword,
    getIsProfile
}

export default userService
