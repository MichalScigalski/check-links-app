import axios from 'axios'
import { useEffect } from 'react'
import { ProfileContainer } from './Profile.style'
import { useNavigate, useParams } from 'react-router'
import { useState } from 'react'

const Profile = () => {
    const { username } = useParams()
    const [ profile, setProfile ] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const getProfile = async () => {
            try {
                const res = await axios.get(process.env.REACT_APP_API_URL + `/profile/user/${username}`)
                setProfile(res.data.profile)
            }
            catch (err) {
                console.log(err.response.data.message)
                navigate('/')
            }
        }
        getProfile()
    }, [])

    return (
        <ProfileContainer>
            { profile &&
                <>
                    <h1>{profile.username}</h1>
                    <ul>
                        {profile.links.map(link => <li>{link.name} ➡️ {link.url}</li>)}
                    </ul>
                </>
            }
        </ProfileContainer>
    )
}

export default Profile