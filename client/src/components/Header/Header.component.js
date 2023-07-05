import { HeaderContainer, HeaderSection } from './Header.style'
import Button from '../Button/Button.component'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import { UserContext } from '../../context/User.context'
import ProfileMenu from '../ProfileMenu/ProfileMenu.component'
import { colors } from '../../globalStyles'
import SwitchToggle from '../SwitchToggle/SwitchToggle.component'

const Header = () => {
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    return (
        <HeaderContainer>
            <h1 onClick={() => navigate('/')}>
                Check<span>Links.</span>
            </h1>
            <HeaderSection>
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
                <div>
                    <span>DarkMode</span>
                    <SwitchToggle />
                </div>
            </HeaderSection>
        </HeaderContainer>
    )
}

export default Header
