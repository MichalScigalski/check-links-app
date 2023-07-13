import { HeaderContainer, HeaderSection, ThemeButton } from './Header.style'
import Button from '../Button/Button.component'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import { UserContext } from '../../context/User.context'
import ProfileMenu from '../ProfileMenu/ProfileMenu.component'
import { colors } from '../../globalStyles'
import SunIcon from '../../assets/img/sun.png'
import MoonIcon from '../../assets/img/moon.png'

const Header = ({ isDarkTheme, setIsDarkTheme }) => {
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    const themeToggle = () => {
        localStorage.setItem('dark-theme', !isDarkTheme)
        setIsDarkTheme(!isDarkTheme)
    }

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
                <ThemeButton onClick={themeToggle}>
                    <img src={isDarkTheme ? SunIcon : MoonIcon} alt="theme-icon" />
                </ThemeButton>
            </HeaderSection>
        </HeaderContainer>
    )
}

export default Header
