import axios from 'axios'
import { useEffect } from 'react'
import { ProfileContainer, ProfileLinks } from './Profile.style'
import { useNavigate, useParams } from 'react-router'
import { useState } from 'react'
import LinkProfile from '../../components/LinkProfile/LinkProfile.component'
import profileService from '../../services/profile.service'

const Profile = () => {
    const { username } = useParams()
    const [profile, setProfile] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const getProfile = async () => {
            try {
                const profile = await profileService.getProfile(username)
                setProfile(profile)
            } catch (err) {
                console.log(err)
                navigate('/')
            }
        }
        getProfile()
    }, [])

    return (
        <ProfileContainer>
            {profile && (
                <>
                    <h1>{profile.displayName}</h1>
                    <span>@{profile.username}</span>
                    {profile.links.length ? (
                        <ProfileLinks>
                            {profile.links.map((link, _id) => (
                                <LinkProfile key={_id} link={link} />
                            ))}
                        </ProfileLinks>
                    ) : (
                        <span>No links yet!</span>
                    )}
                </>
            )}
        </ProfileContainer>
    )
}

export default Profile
