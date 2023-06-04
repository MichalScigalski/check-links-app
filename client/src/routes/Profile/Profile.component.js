import { useContext } from 'react'
import { UserContext } from '../../context/User.context'
import { ProfileContainer } from './Profile.style'

const Profile = () => {
    const { user } = useContext(UserContext)

    return (
        <ProfileContainer>
            <ul>
                <li>{user.id}</li>
                <li>{user.username}</li>
                <li></li>
                <li></li>
            </ul>
        </ProfileContainer>
    )
}

export default Profile