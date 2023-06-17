import axios from 'axios'
import authService from './auth.service'

const API_URL = process.env.REACT_APP_API_URL

const getProfile = async (username) => {
    const res = await axios.get(
        API_URL + `/profile/user/${username}`
    )
    return res.data.profile
}

const getDashboard = async () => {
    const res = await axios.get(
        API_URL + '/profile/dashboard',
        {
            headers: {
                Authorization: 'Bearer ' + authService.getAuthToken(),
            },
        }
    )
    return res.data.profile
}

const createProfile = async () => {
    await axios.post(
        API_URL + '/profile/create',
        {},
        {
            headers: {
                Authorization: 'Bearer ' + authService.getAuthToken(),
            },
        }
    )
}

const updateName = async (displayName) => {
    await axios.put(
        API_URL + '/profile/edit-name',
        {
            displayName,
        },
        {
            headers: {
                Authorization: 'Bearer ' + authService.getAuthToken(),
            },
        }
    )
}

const addLink = async (link) => {
    const { name, url } = link
    await axios.post(
        API_URL + '/profile/add-link',
        {
            name,
            url,
        },
        {
            headers: {
                Authorization: 'Bearer ' + authService.getAuthToken(),
            },
        }
    )
}

const editLink = async (link) => {
    const { name, url, _id } = link
    await axios.put(
        API_URL + '/profile/edit-link/' + _id,
        {
            name,
            url,
        },
        {
            headers: {
                Authorization: 'Bearer ' + authService.getAuthToken(),
            },
        }
    )
}

const profileService = {
    getProfile,
    getDashboard,
    createProfile,
    updateName,
    addLink,
    editLink,
}

export default profileService
