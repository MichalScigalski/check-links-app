import { useContext } from 'react'
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
import AvatarIcon from '../../assets/img/avatar.svg'
import { useNavigate } from 'react-router'
import userService from '../../services/user.service'

const ProfileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const logoutHandler = () => {
        navigate('/')
        window.location.reload()
        setUser(null)
        userService.logout()
    }

    const navigateHandler = (url) => {
        navigate(url)
        toggleMenu()
    }

    return (
        <ProfileMenuContainer>
            <ProfileButton onClick={toggleMenu}>
                <ProfileImage>
                    <img src={AvatarIcon} alt="avatar-icon" />
                </ProfileImage>
            </ProfileButton>
            {isOpen && (
                <DropdownMenu>
                    <MenuSection>{user.username}</MenuSection>
                    <MenuItem onClick={() => navigateHandler('/' + user.username)}>
                        View Page
                    </MenuItem>
                    <MenuItem onClick={() => navigateHandler('/dashboard')}>
                        Edit Profile
                    </MenuItem>
                    <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                </DropdownMenu>
            )}
        </ProfileMenuContainer>
    )
}

export default ProfileMenu
