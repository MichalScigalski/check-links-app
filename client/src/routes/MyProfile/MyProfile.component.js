import { useEffect, useState } from 'react'
import { MyProfileContainer } from './MyProfile.style'
import axios from 'axios'
import authService from '../../services/auth.service'
import Button from '../../components/Button/Button.component'
import { useNavigate } from 'react-router'
import LinkProfile from '../../components/LinkProfile/LinkProfile.component'

const MyProfile = () => {
    const [profile, setProfile] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        dashHandle()
    }, [])

    const dashHandle = async () => {
        try {
            const res = await axios.get(process.env.REACT_APP_API_URL + '/profile/dashboard', {
                headers: {
                    Authorization: 'Bearer ' + authService.getAuthToken()
                }
            })
            setProfile(res.data.profile)
        } catch (err) {
            console.log(err.response.data.message)
        }
    }

    const createProfileHandler = async () => {
        try {
            const res = await axios.post(process.env.REACT_APP_API_URL + '/profile/create', {}, {
                headers: {
                    Authorization: 'Bearer ' + authService.getAuthToken()
                }
            })
            if (res.data) {
                alert('Profile created')
                navigate(0)
            }
        }
        catch (err) {
            alert(err.response.data.message)
        }
    }

    return (
        <MyProfileContainer>
            {profile ?
                <ul>
                    <li>id: {profile.user_id}</li>
                    <li>username: {profile.username}</li>
                    <li>links: </li>
                    <div>
                        {profile.links.map((link, _id) => <LinkProfile key={_id} link={link}/>)}
                    </div>
                    <span onClick={() => navigate(`/${profile.username}`)}>Show my Profile</span>
                </ul>
                :
                <Button value='Create profile' onClick={createProfileHandler} />
            }
        </MyProfileContainer>
    )
}

export default MyProfile