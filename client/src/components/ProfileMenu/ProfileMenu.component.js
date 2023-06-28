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

const ProfileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { user } = useContext(UserContext)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
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
                    <MenuItem>View Page</MenuItem>
                    <MenuItem>Edit Profile</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </DropdownMenu>
            )}
        </ProfileMenuContainer>
    )
}

export default ProfileMenu
