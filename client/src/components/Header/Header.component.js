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
            <h1 onClick={() => navigate('/')}>Check<span>Links.</span></h1>
            {user ? (
                <ProfileMenu />
            ) : (
                <div>
                    <Button
                        variant="outlined"
                        bgColor={colors.green}
                        value={'Login'}
                        onClick={() => navigate('/login')}
                    />
                    
                </div>
            )}
        </HeaderContainer>
    )
}

export default Header
