import { useContext, useEffect } from 'react'
import {
    ProfileMenuContainer,
    ProfileButton,
    ProfileImage,
    DropdownMenu,
    MenuItem,
    MenuSection,
} from './ProfileMenu.style'
import { useState } from 'react'
import { UserContext } from '../../context/User.context'
import { AlertContext } from '../../context/Alert.context'
import AvatarIcon from '../../assets/img/avatar.svg'
import { useNavigate } from 'react-router'
import userService from '../../services/user.service'
import profileService from '../../services/profile.service'

const ProfileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isProfile, setIsProfile] = useState(false)
    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    const { setAlertData } = useContext(AlertContext)

    useEffect(() => {
        const getIsProfile = async () => {
            try {
                await profileService.getProfile(user.username)
                setIsProfile(true)
            } catch(err) {
                setIsProfile(false)
            }
        }
        getIsProfile()
    }, [])

    const toggleMenu = () => setIsOpen(!isOpen)

    const logoutHandler = () => {
        userService.logout()
        setAlertData({ status: true, text: 'logged out', navigation: 0 })
    }

    useEffect(() => {
        setIsOpen(false)
    }, [navigate])

    return (
        <ProfileMenuContainer>
            <ProfileButton onClick={toggleMenu}>
                <ProfileImage>
                    <img src={AvatarIcon} alt="avatar-icon" />
                </ProfileImage>
            </ProfileButton>
            {isOpen && (
                <DropdownMenu>
                    <MenuSection>@{user.username}</MenuSection>
                    { isProfile && (
                        <MenuItem
                            onClick={() => navigate('/' + user.username)}>
                            View Page
                        </MenuItem>
                    )}
                    <MenuItem onClick={() => navigate('/dashboard')}>
                        Dashboard
                    </MenuItem>
                    <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                </DropdownMenu>
            )}
        </ProfileMenuContainer>
    )
}

export default ProfileMenu
