import { useEffect } from 'react'
import { ProfileContainer, ProfileLinks } from './Profile.style'
import { useNavigate, useParams } from 'react-router'
import { useState } from 'react'
import LinkProfile from '../../components/LinkProfile/LinkProfile.component'
import profileService from '../../services/profile.service'
import Loader from '../../components/Loader/Loader.component'

const Profile = ({ homeView }) => {
    let { username } = useParams()
    if (homeView) username = homeView
    const [profile, setProfile] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        getProfile()
    }, [])

    const getProfile = async () => {
        try {
            const profile = await profileService.getProfile(username)
            setProfile(profile)
        } catch (err) {
            console.log(err)
            navigate('/')
        }
    }

    return (
        <>
            {profile ? (
                <ProfileContainer bgColor={profile.backgroundColor}>
                    <h1>{profile.displayName}</h1>
                    <span>@{profile.username}</span>
                    <ProfileLinks>
                        {profile.links.length > 0 ? (
                            profile.links
                                .filter((link) => link.isVisible)
                                .map((link, _id) => (
                                    <LinkProfile
                                        key={_id}
                                        link={link}
                                        color={profile.backgroundColor}
                                    />
                                ))
                        ) : (
                            <p>No links</p>
                        )}
                    </ProfileLinks>
                </ProfileContainer>
            ): 
            <Loader />
            }
        </>
    )
}

export default Profile
