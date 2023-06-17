import axios from 'axios'
import authService from './auth.service'

const getProfile = async (username) => {
    const res = await axios.get(
        process.env.REACT_APP_API_URL + `/profile/user/${username}`
    )
    return res.data.profile
}

const getDashboard = async () => {
    const res = await axios.get(
        process.env.REACT_APP_API_URL + '/profile/dashboard',
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
        process.env.REACT_APP_API_URL + '/profile/create',
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
        process.env.REACT_APP_API_URL + '/profile/edit-name',
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
        process.env.REACT_APP_API_URL + '/profile/add-link',
        {
            name,
            url
        },
        {
            headers: {
                Authorization: 'Bearer ' + authService.getAuthToken(),
            },
        }
    )
}

const editLink = async (link, link_id) => {
    await axios.put(
        process.env.REACT_APP_API_URL + '/profile/edit-link/'+ link_id,
        {
            ...link,
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
    editLink
}

export default profileService
