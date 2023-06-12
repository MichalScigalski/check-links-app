import axios from 'axios'
import { useEffect } from 'react'
import { ProfileContainer, ProfileLinks } from './Profile.style'
import { useNavigate, useParams } from 'react-router'
import { useState } from 'react'
import LinkProfile from '../../components/LinkProfile/LinkProfile.component'

const Profile = () => {
    const { username } = useParams()
    const [profile, setProfile] = useState(null)
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
            {profile &&
                <>
                    <h1>{profile.display_name}</h1>
                    <span>@{profile.username}</span>
                    {profile.links.length ?
                        <ProfileLinks>
                            {profile.links.map((link, _id) => <LinkProfile key={_id} link={link} />)}
                        </ProfileLinks>
                        :
                        <span>No links yet!</span>
                    }
                </>
            }
        </ProfileContainer>
    )
}

export default Profile