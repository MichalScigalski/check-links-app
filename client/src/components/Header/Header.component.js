import { HeaderContainer } from './Header.style'
import Button from '../Button/Button.component'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import { UserContext } from '../../context/User.context'
import ProfileMenu from '../ProfileMenu/ProfileMenu.component'

const Header = () => {
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    return (
        <HeaderContainer>
            <h1 onClick={() => navigate('/')}>CheckLinks</h1>
            {user ? (
                <ProfileMenu />
            ) : (
                <div>
                    <Button
                        variant="outlined"
                        value={'Login'}
                        onClick={() => navigate('/login')}
                        $primary
                    />
                    <Button
                        value={'Donate'}
                        variant="filled"
                        onClick={() => navigate('/donate')}
                    />
                </div>
            )}
        </HeaderContainer>
    )
}

export default Header
