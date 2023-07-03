import { HeaderContainer } from './Header.style'
import Button from '../Button/Button.component'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import { UserContext } from '../../context/User.context'
import ProfileMenu from '../ProfileMenu/ProfileMenu.component'
import { colors } from '../../globalStyles'

const Header = () => {
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    return (
        <HeaderContainer>
            <h1 onClick={() => navigate('/')}>
                Check<span>Links.</span>
            </h1>
            {user ? (
                <ProfileMenu />
            ) : (
                <Button
                    variant="outlined"
                    value={'Login'}
                    onClick={() => navigate('/login')}
                    bgColor={colors.green}
                />
            )}
        </HeaderContainer>
    )
}

export default Header
